from django.shortcuts import render

from rest_framework import viewsets

from .models import Lead
from .serializers import LeadSerializer


class LeadViewSet(viewsets.ModelViewSet):
	"""
	Lead CRUD operation.
	"""
	queryset = Lead.objects.all()
	serializer_class = LeadSerializer

def home_page(request):
    """
    Home page
    """
    return render(request, "index.html", {})
