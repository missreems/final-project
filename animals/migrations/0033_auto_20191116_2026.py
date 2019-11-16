# Generated by Django 2.2.7 on 2019-11-16 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('animals', '0032_auto_20191116_1945'),
    ]

    operations = [
        migrations.AlterField(
            model_name='habitat',
            name='habitat_category',
            field=models.CharField(choices=[('AQ', 'Aquatic'), ('DE', 'Desert'), ('TU', 'Tundra'), ('FO', 'Forest'), ('GR', 'Grassland'), ('UR', 'Urban')], default='', max_length=20),
        ),
    ]
