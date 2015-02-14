from django.conf.urls import patterns, include, url
from . import views

urlpatterns = patterns('',
    url(r'^$', views.crime_collection),
    url(r'^(?P<crime_id>[0-9]+)/$', views.crime_detail),
    url(r'^prediction/$', views.receive_prediction),
    url(r'^compare/$', views.compare),
)