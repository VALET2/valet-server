# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('purduecrime', '0002_auto_20150209_2127'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='crime',
            table='valet_VIEW',
        ),
    ]
