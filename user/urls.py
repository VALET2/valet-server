from django.conf.urls import patterns, include, url
from . import views

urlpatterns = patterns('',
    url(r'^login/$', views.valet_login),
    url(r'^logout/$', views.valet_logout),
)
