from django.db import models

# Create your models here.

# HABITAT MODEL
class Habitat(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=500)
    yearly_average_rainfall = models.CharField(max_length=50)
    average_temperature = models.CharField(max_length=50)
    plant_types = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name}'
    # NEED TO ADD IMAGES FIELD
    # YEARLY AVERAGE RAINFALL AND TEMPERATURE - WANT THEM TO TAKE 2 VALUES




# CLASSIFICATION MODEL
class Classification(models.Model):
    classification = models.CharField(max_length=20, null=True)

    def __str__(self):
        return f'{self.classification}'




# ANIMAL MODEL
class Animal(models.Model):
    name = models.CharField(max_length=30, unique=True)
    scientific_name = models.CharField(max_length=100, unique=True)
    average_lifespan = models.IntegerField()
    size = models.IntegerField()
    weight = models.IntegerField()
    facts = models.CharField(max_length=300, blank=True)

    herbi = 'HE'
    omni = 'OM'
    carni = 'CA'
    diet_choices = [
      (herbi, 'Herbivore'),
      (omni, 'Omnivore'),
      (carni, 'Carnivore')
    ]
    diet = models.CharField(max_length=9, choices=diet_choices, default=omni)
    classification = models.ForeignKey(
      Classification,
      related_name='animals',
      on_delete=models.DO_NOTHING,
      null=True
    )
    habitats = models.ManyToManyField(
      Habitat,
      related_name='animals',
      blank=True
    )

    def __str__(self):
        return f'{self.name}'
    # NEED TO ADD INFORMATION FIELD AND IMAGES FIELD
    # FACTS CURRENTLY TAKES ONLY ONE FACT, NEEDS TO HAVE THE ABILITY TO TAKE MULTIPLE FACTS IF THE USER WANTS
