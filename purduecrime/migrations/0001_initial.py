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
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('inci_id', models.IntegerField()),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('date_occu', models.DateTimeField()),
            ],
            options={
                'db_table': 'VALET_VIEW',
            },
            bases=(models.Model,),
        ),
    ]
