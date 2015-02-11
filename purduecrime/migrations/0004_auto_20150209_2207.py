# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('purduecrime', '0003_auto_20150209_2129'),
    ]

    operations = [
        migrations.AddField(
            model_name='crime',
            name='agency',
            field=models.CharField(default=None, max_length=100),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='chrgdesc',
            field=models.CharField(default=None, max_length=100),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='city',
            field=models.CharField(default=None, max_length=100),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='date_rept',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='geox',
            field=models.FloatField(null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='geoy',
            field=models.FloatField(null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='lwchrgid',
            field=models.IntegerField(null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='lwmainid',
            field=models.IntegerField(null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='state',
            field=models.CharField(default=None, max_length=100),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='street',
            field=models.CharField(default=None, max_length=100),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='streetdir',
            field=models.CharField(default=None, max_length=100),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='streetnbr',
            field=models.IntegerField(null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='crime',
            name='zip',
            field=models.IntegerField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='date_occu',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='inci_id',
            field=models.IntegerField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='latitude',
            field=models.FloatField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='crime',
            name='longitude',
            field=models.FloatField(null=True),
            preserve_default=True,
        ),
    ]
