from rest_framework import serializers
from .models import Animal, Classification, Habitat


# CORE SERIALIZERS
class HabitatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitat
        fields = ('id', 'name', 'description', 'yearly_average_rainfall', 'average_temperature', 'plant_types')


class ClassificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classification
        fields = ('id', 'classification')


class AnimalSerializer(serializers.ModelSerializer):
    classification = ClassificationSerializer()
    habitats = HabitatSerializer(many=True)
    class Meta:
        model = Animal
        fields = ('id', 'name', 'scientific_name', 'average_lifespan', 'size', 'weight', 'facts', 'diet', 'classification', 'habitats')
