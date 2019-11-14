from rest_framework import serializers
from .models import Animal, Classification, Habitat, Threat, Description

# NESTED SERIALIZERS
class NestedAnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = ('id', 'name', 'scientific_name', 'average_lifespan', 'size', 'weight', 'facts', 'diet')

class NestedHabitatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitat
        fields = ('id', 'name', 'min_rainfall', 'max_rainfall', 'min_temperature', 'max_temperature', 'plant_types')

class NestedThreatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Threat
        fields = ('id', 'name')

class NestedClassificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classification
        fields = ('id', 'classification')

class NestedDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Description
        fields = ('id', 'brief', 'info', 'heading')





# CORE SERIALIZERS
class ThreatSerializer(serializers.ModelSerializer):
    animals = NestedAnimalSerializer(many=True)
    habitats = NestedHabitatSerializer(many=True)
    descriptions = NestedDescriptionSerializer(many=True)
    class Meta:
        model = Threat
        fields = ('id', 'name', 'animals', 'habitats', 'descriptions')

class HabitatSerializer(serializers.ModelSerializer):
    animals = NestedAnimalSerializer(many=True)
    threats = NestedThreatSerializer(many=True)
    class Meta:
        model = Habitat
        fields = ('id', 'name', 'min_rainfall', 'max_rainfall', 'min_temperature', 'max_temperature', 'plant_types', 'animals', 'threats')

class ClassificationSerializer(serializers.ModelSerializer):
    animals = NestedAnimalSerializer(many=True)
    class Meta:
        model = Classification
        fields = ('id', 'classification', 'animals')

class AnimalSerializer(serializers.ModelSerializer):
    classification = NestedClassificationSerializer()
    habitats = NestedHabitatSerializer(many=True)
    threats = NestedThreatSerializer(many=True)
    descriptions = NestedDescriptionSerializer(many=True)
    class Meta:
        model = Animal
        fields = ('id', 'name', 'scientific_name', 'average_lifespan', 'size', 'weight', 'facts', 'diet', 'classification', 'habitats', 'threats', 'descriptions')
