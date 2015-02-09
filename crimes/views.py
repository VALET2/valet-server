from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from crimes.models import Crimes
from crimes.serializers import CrimeSerializer
from datetime import datetime

@api_view(['GET'])
def crime_detail(request, crime_id):
    crime = Crimes.objects.filter(id=crime_id)
    if len(crime) == 0:
        return render(request, 'crimes/not_found.html', {'crime_data':crime_id},status=404)
    else:
        serializer = CrimeSerializer(crime, many=False)
        return Response(serializer.data)

@api_view(['GET'])
def crime_collection(request):

    if request.method == 'GET':

        query_params = request.query_params

        query_dict = query_params.dict()
        params_list = query_dict.keys()

        start_date = datetime.strptime(query_params.get('startdate',default='2010-01-01'), '%Y-%m-%d')
        end_date = datetime.strptime(query_params.get('enddate',default='2100-01-01'),'%Y-%m-%d')

        if 'startdate' in params_list:
            query_dict.pop('startdate')
        if 'enddate' in params_list:
            query_dict.pop('enddate')

        crimes = Crimes.objects.filter(**query_dict)
        crimes = crimes.filter(date__gte=start_date, date__lt=end_date)

        serializer = CrimeSerializer(crimes, many=True)
        return Response(serializer.data)

# Create your views here.
