from django.urls import path
from .views import AnimalListView, AnimalDetailView, ClassificationListView, ClassificationDetailView, HabitatListView, HabitatDetailView, ThreatListView, ThreatDetailView

urlpatterns = [
  path('animals', AnimalListView.as_view()),
  path('animals/<int:pk>/', AnimalDetailView.as_view()),
  path('classifications', ClassificationListView.as_view()),
  path('classifications/<int:pk>/', ClassificationDetailView.as_view()),
  path('habitats', HabitatListView.as_view()),
  path('habitats/<int:pk>/', HabitatDetailView.as_view()),
  path('threats', ThreatListView.as_view()),
  path('threats/<int:pk>/', ThreatDetailView.as_view())
]
