# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('purduecrime', '0006_auto_20150210_1403'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crime',
            name='streetnbr',
            field=models.CharField(max_length=100),
            preserve_default=True,
        ),
    ]
