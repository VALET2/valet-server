from django.conf.urls import patterns, include, url
from . import views

urlpatterns = patterns('',
    url(r'^$', views.valet_home),
#    url(r'^login$', views.valet_login),
)
