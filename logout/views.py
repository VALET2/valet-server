from django.shortcuts import redirect
from django.contrib.auth import logout

def valet_logout(request):
    logout(request)
    return redirect('/')
