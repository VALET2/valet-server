from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from crimes.models import Crimes
from crimes.serializers import CrimeSerializer

@api_view(['GET'])
def crime_collection(request):
    if request.method == 'GET':
        crimes = Crimes.objects.all()
        serializer = CrimeSerializer(crimes, many=True)
        return Response(serializer.data)

# Create your views here.
