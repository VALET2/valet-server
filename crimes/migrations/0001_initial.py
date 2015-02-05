# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Crime',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('crimetype', models.IntegerField()),
                ('identifier', models.IntegerField()),
                ('police_id', models.IntegerField()),
                ('police_name', models.CharField(default='', max_length=50)),
                ('address', models.TextField()),
                ('date', models.CharField(max_length=20)),
                ('description', models.TextField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
