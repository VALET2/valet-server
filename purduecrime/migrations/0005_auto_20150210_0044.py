# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('purduecrime', '0004_auto_20150209_2207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crime',
            name='date_occu',
            field=models.DateTimeField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='date_rept',
            field=models.DateTimeField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='geox',
            field=models.FloatField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='geoy',
            field=models.FloatField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='inci_id',
            field=models.IntegerField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='latitude',
            field=models.FloatField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='longitude',
            field=models.FloatField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='lwchrgid',
            field=models.IntegerField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='lwmainid',
            field=models.IntegerField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='streetnbr',
            field=models.IntegerField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='zip',
            field=models.IntegerField(),
            preserve_default=True,
        ),
    ]
