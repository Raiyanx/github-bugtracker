# Generated by Django 4.2.4 on 2023-08-27 10:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gb_app', '0002_alter_repo_collaborators_alter_user_repos'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Repo',
            new_name='Project',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='repos',
            new_name='projects',
        ),
    ]
