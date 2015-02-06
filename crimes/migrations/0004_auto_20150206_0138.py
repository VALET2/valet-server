# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crimes', '0003_auto_20150206_0134'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crimes',
            name='identifier',
            field=models.CharField(max_length=255),
            preserve_default=True,
        ),
    ]
