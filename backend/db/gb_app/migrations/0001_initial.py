# Generated by Django 4.2.4 on 2023-08-27 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Repo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('owner', models.CharField(max_length=200)),
                ('link', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('github_email', models.EmailField(max_length=254)),
                ('repos', models.ManyToManyField(related_name='repos', to='gb_app.repo')),
            ],
        ),
        migrations.AddField(
            model_name='repo',
            name='collaborators',
            field=models.ManyToManyField(related_name='collaborators', to='gb_app.user'),
        ),
    ]