from django.urls import path
from . import views
from .views import getSections, getPages

urlpatterns = [
    path('', views.getRoutes, name = "routes"),
    path('sections/<str:category>/', getSections, name='get-sections'),
    path('pages/<str:category>/', getPages, name='get-pages'),
]
