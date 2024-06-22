from django.db import models

# Create your models here.

class Page(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    link = models.CharField(max_length = 200)  
    position = models.IntegerField()
    
    class Meta:
        ordering = ['position']

    def __str__(self):
        return self.title

class Section(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=50)
    content = models.TextField()
    position = models.IntegerField()
    
    class Meta:
        ordering = ['position']

    def __str__(self):
        return self.title