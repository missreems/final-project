from django.contrib import admin
from .models import Animal, Classification, Habitat, Threat, Description

# Register your models here.
admin.site.register(Animal)
admin.site.register(Classification)
admin.site.register(Habitat)
admin.site.register(Threat)
admin.site.register(Description)
