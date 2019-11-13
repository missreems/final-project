from django.contrib import admin
from .models import Animal, Classification, Habitat

# Register your models here.
admin.site.register(Animal)
admin.site.register(Classification)
admin.site.register(Habitat)
