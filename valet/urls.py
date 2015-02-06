from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'valet.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', include('backbone.urls')),
    url(r'^crimes/',include('crimes.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
)
