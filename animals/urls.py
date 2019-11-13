from django.urls import path
from .views import AnimalListView, AnimalDetailView, ClassificationListView, ClassificationDetailView, HabitatListView, HabitatDetailView

urlpatterns = [
  path('animals', AnimalListView.as_view()),
  path('animals/<int:pk>/', AnimalDetailView.as_view()),
  path('classifications', ClassificationListView.as_view()),
  path('classifications/<int:pk>/', ClassificationDetailView.as_view()),
  path('habitats', HabitatListView.as_view()),
  path('habitats/<int:pk>/', HabitatDetailView.as_view())
]
