from django.contrib import admin
from .models import Section, Page

# Register your models here.

class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'link', 'position')
    list_filter = ('category',)  # Enables filtering by category
    search_fields = ('title', 'category')  # Allows searching by title and category
    ordering = ('position',)  # Default ordering by position

class SectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'content', 'position')
    list_filter = ('category',)  # Enables filtering by category
    search_fields = ('title', 'category')  # Allows searching by title and category
    ordering = ('position',)  # Default ordering by position

admin.site.register(Page, PageAdmin)
admin.site.register(Section, SectionAdmin)