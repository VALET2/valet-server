from django.db import models
from rest_framework import serializers
from purduecrime.models import Crime

class CrimeSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    inci_id = serializers.IntegerField()
    lwchrgid = serializers.IntegerField()
    lwmainid = serializers.IntegerField()
    chrgdesc = serializers.CharField()
    date_occu = serializers.DateTimeField()
    date_rept = serializers.DateTimeField()
    streetnbr = serializers.CharField()
    streetdir = serializers.CharField()
    street = serializers.CharField()
    city = serializers.CharField()
    state = serializers.CharField()
    zip = serializers.CharField()
    agency = serializers.CharField()
    geox = serializers.FloatField()
    geoy = serializers.FloatField()
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()

    def create(self, validated_data):
        return Crime.objects.create(**validated_data)

#    def update ??
