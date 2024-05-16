from django.urls import path
from . import views
from .views import getSections

urlpatterns = [
    path('', views.getRoutes, name = "routes"),
    path('sections/<str:category>/', getSections, name='get-sections'),

    #path('notes/', views.getPages, name = "notes"),
    #path('notes/<str:pk>/', views.getNote, name = "note"),
]
