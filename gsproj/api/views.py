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
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
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
