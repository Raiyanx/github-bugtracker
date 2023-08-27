from django.db import models

class User(models.Model):
  name = models.CharField(max_length=200)
  github_email = models.EmailField()
  repos = models.ManyToManyField("Repo")

class Repo(models.Model):
  name = models.CharField(max_length=200)
  owner = models.CharField(max_length=200)
  collaborators = models.ManyToManyField("User")
  link = models.CharField(max_length=1000)