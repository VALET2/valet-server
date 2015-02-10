from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from purduecrime.models import Crime
from purduecrime.serializers import CrimeSerializer
from datetime import datetime
from django.core.exceptions import ObjectDoesNotExist

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

        query_params = request.query_params

        query_dict = query_params.dict()
        params_list = query_dict.keys()

        start_date = datetime.strptime(query_params.get('startdate',default='2015-01-01'), '%Y-%m-%d')
        end_date = datetime.strptime(query_params.get('enddate',default='2100-01-01'),'%Y-%m-%d')

        if 'startdate' in params_list:
            query_dict.pop('startdate')
        if 'enddate' in params_list:
            query_dict.pop('enddate')

        crimes = Crime.objects.using('purduecrime').filter(date_occu__gte=start_date, date_occu__lt=end_date)
        crimes = crimes.filter(**query_dict)

        serializer = CrimeSerializer(crimes, many=True)
        return Response(serializer.data)
