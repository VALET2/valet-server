from django import forms
import datetime
from django.forms.extras.widgets import SelectDateWidget

class PredictionImageForm(forms.Form):
    date = forms.DateField(label='Prediction Date', initial=datetime.date.today(), widget=SelectDateWidget)
    predictionImg = forms.FileField(label='Prediction Image')