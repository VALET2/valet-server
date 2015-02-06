from django.db import models
from rest_framework import serializers
from crimes.models import Crimes

class CrimeSerializer(serializers.Serializer):
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()
    crimetype = serializers.IntegerField()
    identifier = serializers.CharField()
    police_id = serializers.IntegerField()
    police_name = serializers.CharField(max_length=50)
    address = serializers.CharField()
    date = serializers.DateTimeField()
    description = serializers.CharField()
    id = serializers.IntegerField()

    def create(self, validated_data):
        return Crimes.objects.create(**validated-data)

    def update(self, instance, validated_data):
        instance.latitude = validated_data.get('latitude', instance.latitude)
        instance.longitude = validated_data.get('longitude', instance.longitude)
        instance.crimetype = validated_data.get('type', instance.type)
        instance.identifier = validated_data.get('identifier',instance.identifier)
        instance.policd_id = validated_data.get('police_id', instance.police_id)
        instance.policd_name= validated_data.get('police_name', instance.police_name)
        instance.address = validated_data.get('address', instance.address)
        instance.date = validated_data.get('date', instance.date)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance
