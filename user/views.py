from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .loginform import LoginForm

def valet_login(request):
    if request.method == 'GET':
        form = LoginForm()
        return render(request, 'login.html', {'form':form, 'action':request.GET['next']})

    else:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return redirect(request.GET['next'])
            else:
                return render(request, 'account_disabled.html')
	else:
            return render(request, 'wrond_login.html')

def valet_logout(request):
    logout(request)
    return redirect(request.GET['next'])
