from django.shortcuts import render
from .loginform import LoginForm
from django.contrib.auth import authenticate, login, logout

def valet_home(request):
    if request.method == 'GET':
        if not request.user.is_authenticated():
            form = LoginForm()
            return render(request, 'login.html', {'form':form})
        else:
            return render(request, 'index.html')

    elif request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return render(request, 'index.html') 
            else:
                return render(request, 'account_disabled.html')
        else:
            return render(request, 'wrong_login.html')
