# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from .models import Animal, Classification, Habitat
from .serializers import AnimalSerializer, ClassificationSerializer, HabitatSerializer

# ANIMAL
class AnimalListView(ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class AnimalDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


# CLASSIFICATION
class ClassificationListView(ListAPIView):
    queryset = Classification.objects.all()
    serializer_class = ClassificationSerializer

class ClassificationDetailView(RetrieveAPIView):
    queryset = Classification.objects.all()
    serializer_class = ClassificationSerializer


# HABITAT
class HabitatListView(ListAPIView):
    queryset = Habitat.objects.all()
    serializer_class = HabitatSerializer

class HabitatDetailView(RetrieveAPIView):
    queryset = Habitat.objects.all()
    serializer_class = HabitatSerializer
