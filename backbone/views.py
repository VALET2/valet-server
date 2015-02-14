from django.shortcuts import render, redirect

def valet_home(request):
    if request.method == 'GET':
        if not request.user.is_authenticated():
            return redirect('/user/login/?next=/')
        else:
            return render(request, 'index.html')

    return render(request, 'index.html')
