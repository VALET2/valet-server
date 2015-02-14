# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('purduecrime', '0007_auto_20150210_1414'),
    ]

    operations = [
        migrations.CreateModel(
            name='PredictionImage',
            fields=[
                ('date', models.DateTimeField(serialize=False, primary_key=True)),
                ('predictionImg', models.FileField(upload_to=b'')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
