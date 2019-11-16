# Generated by Django 2.2.7 on 2019-11-15 08:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('animals', '0027_auto_20191114_1753'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='animal',
            name='habitats',
        ),
        migrations.AddField(
            model_name='animal',
            name='habitats',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='animals', to='animals.Habitat'),
        ),
    ]