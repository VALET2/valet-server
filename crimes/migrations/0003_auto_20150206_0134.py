# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crimes', '0002_auto_20150206_0122'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crimes',
            name='date',
            field=models.DateTimeField(),
            preserve_default=True,
        ),
    ]
