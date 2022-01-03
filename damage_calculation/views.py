from django.shortcuts import render

def damage_calculation(request):
    return render(request, 'damage_calculation/damage_calculation.html')
