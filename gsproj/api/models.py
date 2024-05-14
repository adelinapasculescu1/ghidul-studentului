from django.db import models

# Create your models here.

class Page(models.Model):
    title = models.CharField(max_length=100)
    #picture = models.ImageField(upload_to='images/')
    geeks_field = models.URLField(max_length = 200)  
    
    def __str__(self):
        return self.title

class Section(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=50)
    content = models.TextField()

    def __str__(self):
        return self.title