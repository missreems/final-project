from django.db import models
from PIL import Image


# THREAT MODEL
class Threat(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f'{self.name}'


# HABITAT MODEL
class Habitat(models.Model):
    name = models.CharField(max_length=30, unique=True)
    min_rainfall = models.IntegerField()
    max_rainfall = models.IntegerField()
    min_temperature = models.IntegerField()
    max_temperature = models.IntegerField()
    plant_types = models.CharField(max_length=200, blank=True)

    habitat_choices = (
        ('AQ', 'Aquatic'),
        ('DE', 'Desert'),
        ('TU', 'Tundra'),
        ('FO', 'Forest'),
        ('GR', 'Grassland'),
        ('UR', 'Urban')
    )
    habitat_category = models.CharField(max_length=20, choices=habitat_choices, default='')

    threats = models.ManyToManyField(
      Threat,
      related_name='habitats',
      blank=True
    )

    def __str__(self):
        return f'{self.name}'
    # NEED TO ADD IMAGES FIELD


# CLASSIFICATION MODEL
class Classification(models.Model):
    classification = models.CharField(max_length=20, null=True)

    def __str__(self):
        return f'{self.classification}'


# ANIMAL MODEL
class Animal(models.Model):
    name = models.CharField(max_length=50, unique=True)
    scientific_name = models.CharField(max_length=100, unique=True)
    average_lifespan = models.IntegerField()
    size = models.FloatField()
    size_unit = models.CharField(max_length=30, default='')
    weight = models.FloatField()
    weight_unit = models.CharField(max_length=30, default='')
    fact = models.CharField(max_length=300, blank=True)

    diet_choices = (
      ('HE', 'Herbivore'),
      ('OM', 'Omnivore'),
      ('CA', 'Carnivore')
    )
    diet = models.CharField(max_length=20, choices=diet_choices)

    classification = models.ForeignKey(
      Classification,
      related_name='animals',
      on_delete=models.DO_NOTHING,
      null=True
    )
    habitats = models.ForeignKey(
      Habitat,
      related_name='animals',
      on_delete=models.DO_NOTHING,
      null=True
    )
    threats = models.ManyToManyField(
      Threat,
      related_name='animals',
      blank=True
    )

    def __str__(self):
        return f'{self.name}'


# DESCRIPTION MODEL
class Description(models.Model):
    brief = models.CharField(max_length=100)
    heading = models.CharField(max_length=100)
    info = models.TextField()
    threat = models.ForeignKey(
      Threat,
      related_name='descriptions',
      on_delete=models.DO_NOTHING,
      null=True,
      blank=True
    )
    animal = models.ForeignKey(
      Animal,
      related_name='descriptions',
      on_delete=models.DO_NOTHING,
      null=True,
      blank=True
    )
    habitat = models.ForeignKey(
      Habitat,
      related_name='descriptions',
      on_delete=models.DO_NOTHING,
      null=True,
      blank=True
    )

    def __str__(self):
        return f'{self.brief}'


# IMAGE MODEL
class Image(models.Model):
    brief = models.CharField(max_length=100)
    image = models.CharField(max_length=500)
    threat = models.ForeignKey(
      Threat,
      related_name='images',
      on_delete=models.DO_NOTHING,
      null=True,
      blank=True
    )
    animal = models.ForeignKey(
      Animal,
      related_name='images',
      on_delete=models.DO_NOTHING,
      null=True,
      blank=True
    )
    habitat = models.ForeignKey(
      Habitat,
      related_name='images',
      on_delete=models.DO_NOTHING,
      null=True,
      blank=True
    )

    def __str__(self):
        return f'{self.brief}'
