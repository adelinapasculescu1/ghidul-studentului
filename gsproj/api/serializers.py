from rest_framework.serializers import ModelSerializer
from .models import Section, Page

class SectionSerializer(ModelSerializer):
    class Meta:
        model = Section
        fields = ['id', 'title', 'category', 'content']


class PageSerializer(ModelSerializer):
    class Meta:
        model = Page
        fields = ['id', 'title', 'category', 'link']
