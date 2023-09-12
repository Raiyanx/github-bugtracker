from django.db import models

class User(models.Model):
  name = models.CharField(max_length=200, null=True)
  github_email = models.EmailField()
  projects = models.ManyToManyField("Project")
  active = models.BooleanField(default=True)
  def __str__(self):
    return str({self.name, self.github_email})

class Project(models.Model):
  name = models.CharField(max_length=200)
  own_project = models.BooleanField(default=True)
  owner_email = models.EmailField()
  collaborators = models.ManyToManyField("User")
  link = models.CharField(max_length=1000)
  def __str__(self):
    return str({self.name, self.owner})