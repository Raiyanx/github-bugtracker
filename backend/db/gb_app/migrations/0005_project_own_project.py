# Generated by Django 4.2.4 on 2023-09-07 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_app', '0004_remove_project_owner_project_owner_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='own_project',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
    ]
