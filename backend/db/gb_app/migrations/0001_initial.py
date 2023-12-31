# Generated by Django 4.2.8 on 2023-12-31 04:30

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('repository', models.CharField(max_length=1000, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
                ('github_email', models.CharField(max_length=1000, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
                ('description', models.CharField(max_length=1000, null=True)),
                ('state', models.CharField(choices=[('BL', 'Backlog'), ('TD', 'Todo'), ('IP', 'In Progress'), ('TT', 'Testing'), ('DE', 'Done'), ('CD', 'Closed')], default='BL', max_length=2)),
                ('assigned_to', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='gb_app.user')),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='gb_app.project')),
            ],
        ),
        migrations.AddField(
            model_name='project',
            name='collaborators',
            field=models.ManyToManyField(to='gb_app.user'),
        ),
        migrations.AddField(
            model_name='project',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='gb_app.user'),
        ),
    ]
