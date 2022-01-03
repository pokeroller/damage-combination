from django.urls import path
from . import views

urlpatterns = [
    path('', views.damage_calculation, name='damage_calculation'),
]