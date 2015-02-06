from django.db import models
from django.utils import timezone

class Crimes(models.Model):

    created = models.DateTimeField(auto_now_add=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    crimetype = models.IntegerField()
    identifier = models.CharField(max_length=255)
    police_id = models.IntegerField()
    police_name = models.CharField(max_length=50, default='')
    address = models.TextField()
    date = models.DateTimeField()
    description = models.TextField()

    def __str__(self):
        return self.description
