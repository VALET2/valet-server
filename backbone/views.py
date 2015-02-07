from django.shortcuts import render

def valet_home(request):
    return render(request, 'index.html')

# Create your views here.
