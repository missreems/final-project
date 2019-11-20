from rest_framework import serializers
from .models import Animal, Classification, Habitat, Threat, Description, Image

# NESTED SERIALIZERS
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

class NestedImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'brief', 'image')

class NestedHabitatSerializer(serializers.ModelSerializer):
    images = NestedImageSerializer(many=True)
    class Meta:
        model = Habitat
        fields = ('id', 'name', 'min_rainfall', 'max_rainfall', 'min_temperature', 'max_temperature', 'plant_types', 'habitat_category', 'images')

class NestedAnimalSerializer(serializers.ModelSerializer):
    images = NestedImageSerializer(many=True)
    class Meta:
        model = Animal
        fields = ('id', 'name', 'scientific_name', 'average_lifespan', 'size', 'size_unit', 'weight', 'weight_unit', 'fact', 'diet', 'images')
    

# CORE SERIALIZERS
class ThreatSerializer(serializers.ModelSerializer):
    animals = NestedAnimalSerializer(many=True)
    habitats = NestedHabitatSerializer(many=True)
    descriptions = NestedDescriptionSerializer(many=True)
    images = NestedImageSerializer(many=True)
    class Meta:
        model = Threat
        fields = ('id', 'name', 'animals', 'habitats', 'descriptions', 'images')

class HabitatSerializer(serializers.ModelSerializer):
    animals = NestedAnimalSerializer(many=True)
    threats = NestedThreatSerializer(many=True)
    descriptions = NestedDescriptionSerializer(many=True)
    images = NestedImageSerializer(many=True)
    class Meta:
        model = Habitat
        fields = ('id', 'name', 'min_rainfall', 'max_rainfall', 'min_temperature', 'max_temperature', 'plant_types', 'habitat_category', 'animals', 'threats', 'descriptions', 'images')

class ClassificationSerializer(serializers.ModelSerializer):
    animals = NestedAnimalSerializer(many=True)
    class Meta:
        model = Classification
        fields = ('id', 'classification', 'animals')

class AnimalSerializer(serializers.ModelSerializer):
    classification = NestedClassificationSerializer()
    habitats = NestedHabitatSerializer()
    threats = NestedThreatSerializer(many=True)
    descriptions = NestedDescriptionSerializer(many=True)
    images = NestedImageSerializer(many=True)
    class Meta:
        model = Animal
        fields = ('id', 'name', 'scientific_name', 'average_lifespan', 'size', 'size_unit', 'weight', 'weight_unit', 'fact', 'diet', 'classification', 'habitats', 'threats', 'descriptions', 'images')
