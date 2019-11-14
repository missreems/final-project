from django.db import models





# THREAT MODEL
class Threat(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f'{self.name}'
    # ADD IMAGES


# HABITAT MODEL
class Habitat(models.Model):
    name = models.CharField(max_length=30, unique=True)
    min_rainfall = models.IntegerField()
    max_rainfall = models.IntegerField()
    min_temperature = models.IntegerField()
    max_temperature = models.IntegerField()
    plant_types = models.CharField(max_length=200)
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
    threats = models.ManyToManyField(
      Threat,
      related_name='animals',
      blank=True
    )

    def __str__(self):
        return f'{self.name}'
    # NEED TO ADD INFORMATION FIELD AND IMAGES FIELD
    # FACTS CURRENTLY TAKES ONLY ONE FACT, NEEDS TO HAVE THE ABILITY TO TAKE MULTIPLE FACTS IF THE USER WANTS
  
# DESCRIPTION MODEL
class Description(models.Model):
    brief = models.CharField(max_length=100, default='')
    heading = models.CharField(max_length=100)
    info = models.TextField(default='')
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

    def __str__(self):
        return f'{self.brief}'
