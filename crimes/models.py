from django.db import models
from django.utils import timezone

class Crime(models.Model):

    created = models.DateTimeField(auto_now_add=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    crimetype = models.IntegerField()
    identifier = models.IntegerField()
    police_id = models.IntegerField()
    police_name = models.CharField(max_length=50, default='')
    address = models.TextField()
    date = models.CharField(max_length=20, blank=False)
    description = models.TextField()

    def __str__(self):
        return self.description
