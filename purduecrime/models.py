
from django.db import models
from django.utils import timezone

class Crime(models.Model):

    id = models.AutoField(primary_key=True)
    inci_id = models.IntegerField()
    lwchrgid = models.IntegerField()
    lwmainid = models.IntegerField()
    chrgdesc = models.CharField(max_length=100, default=None)
    date_occu = models.DateTimeField()
    date_rept = models.DateTimeField()
    streetnbr = models.CharField(max_length=100)
    streetdir = models.CharField(max_length=100, default=None)
    street = models.CharField(max_length=100, default=None)
    city = models.CharField(max_length=100, default=None)
    state = models.CharField(max_length=100, default=None)
    zip = models.CharField(max_length=100)
    agency = models.CharField(max_length=100, default=None)
    geox = models.FloatField()
    geoy = models.FloatField()
    latitude = models.FloatField()
    longitude = models.FloatField()

    class Meta:
        db_table = 'valet_VIEW'


class PredictionImage(models.Model):

    date = models.DateTimeField(primary_key=True)
    predictionImg = models.FileField()