from django.conf.urls import url
from rest_framework import routers

from .views import LeadViewSet, home_page

router = routers.DefaultRouter()

router.register(r'leads', LeadViewSet)

urlpatterns = [
    url(r'^$', home_page, name='home_page')
]

urlpatterns += router.urls
