from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from purduecrime.models import Crime
from purduecrime.serializers import CrimeSerializer
from datetime import datetime
from django.core.exceptions import ObjectDoesNotExist
from .form import PredictionImageForm
from .saveimg import save
from django.contrib.auth.decorators import login_required

@api_view(['GET'])
def crime_detail(request, crime_id):
    try:
        crime = Crime.objects.using('purduecrime').get(id=crime_id)
    except:
        return render(request, 'not_found.html', {'crime_data':crime_id},status=404)

    serializer = CrimeSerializer(crime, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def crime_collection(request):

    if request.method == 'GET':

        if not request.user.is_authenticated():
            return redirect('/user/login/?next=/crimes/')

        query_params = request.query_params

        query_dict = query_params.dict()
        params_list = query_dict.keys()

        start_date = datetime.strptime(query_params.get('startdate',default='2015-02-01'), '%Y-%m-%d')
        end_date = datetime.strptime(query_params.get('enddate',default='2100-01-01'),'%Y-%m-%d')

        if 'startdate' in params_list:
            query_dict.pop('startdate')
        if 'enddate' in params_list:
            query_dict.pop('enddate')

#        crimes = Crime.objects.using('purduecrime').filter(date_occu__gte=start_date, date_occu__lt=end_date)
        crimes = Crime.objects.using('purduecrime').filter(date_occu__range=(start_date,end_date))
        crimes = crimes.filter(**query_dict)

        serializer = CrimeSerializer(crimes, many=True)
        return Response(serializer.data)

def receive_prediction(request):

    if request.method == 'GET':

        if not request.user.is_authenticated():
            return redirect('/user/login/?next=/crimes/prediction/')

        form = PredictionImageForm()
        return render(request, 'file_upload.html', {'form':form})

    elif request.method == 'POST' and request.user.is_authenticated():
        form = PredictionImageForm(request.POST, request.FILES)
        if form.is_valid:
            save(request.POST, request.FILES['predictionImg'])
            return render(request, 'upload_successful.html')

    else:
        return redirect('/user/login/?next=/crimes/prediction/')

@api_view(['GET'])
def compare(request):

    if not request.user.is_authenticated():
        return redirect('/user/login/?next=/crimes/compare/')

    date = request.query_params.get('date', default=None)

    if date is None:
        date = datetime.date.today().isoformat().split('T')[0]

    return render(request, 'compare.html', {'src': '/static/prediction/' +date + '.jpg'})
