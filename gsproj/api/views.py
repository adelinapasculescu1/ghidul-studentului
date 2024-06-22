from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from .models import Section, Page
from .serializers import PageSerializer, SectionSerializer

# Create your views here.

'''
class SectionListByCategoryView(generics.ListAPIView):
    serializer_class = SectionSerializer

    def get_queryset(self):
        category = self.kwargs['category']
        return Section.objects.filter(category=category)
'''    

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/sections/<str:category>',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of sections, filtered by category'
        },
        {
            'Endpoint': '/pages/<str:category>',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of pages, filtered by category'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getSections(request, category = None):
    sections = Section.objects.filter(category=category).order_by('position')  
    serializer = SectionSerializer(sections, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPages(request, category = None):
    pages = Page.objects.filter(category=category).order_by('position')  
    serializer = PageSerializer(pages, many=True)
    return Response(serializer.data)
