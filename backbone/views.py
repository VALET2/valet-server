from django.shortcuts import render

def valet_home(request):
    return render(request, 'backbone/index.html')

# Create your views here.
