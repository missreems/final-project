# Generated by Django 2.2.7 on 2019-11-13 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('animals', '0006_auto_20191113_0912'),
    ]

    operations = [
        migrations.AlterField(
            model_name='animal',
            name='habitats',
            field=models.ManyToManyField(blank=True, related_name='animals', to='animals.Habitat'),
        ),
    ]
