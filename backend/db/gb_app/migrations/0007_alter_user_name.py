# Generated by Django 4.2.4 on 2023-09-07 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_app', '0006_user_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]