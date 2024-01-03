from django.db import models
from django.utils.translation import gettext as _
from django.utils import timezone

class User(models.Model):
  name = models.CharField(max_length=200, null=True)
  github_email = models.CharField(max_length=1000, null=True)

class Project(models.Model):
  name = models.CharField(max_length=200, null=True)
  owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="projects", null=True)
  date_created = models.DateTimeField(default=timezone.now) 
  repository = models.CharField(max_length=1000, null=True)
  collaborators = models.ManyToManyField("User") 

class Ticket(models.Model):
  class StateTypes(models.TextChoices):
    BACKLOG = "BL", _("Backlog")
    TODO = "TD", _("Todo")
    INPROGRESS = "IP", _("In Progress")
    TESTING = "TT", _("Testing")
    DONE = "DE", _("Done")
    CLOSED = "CD", _("Closed")

  name = models.CharField(max_length=200, null=True)
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="tickets", null=True)
  description = models.CharField(max_length=1000, null=True)
  assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tickets", null=True)
  
  state = models.CharField(
    max_length=2,
    choices=StateTypes.choices,
    default=StateTypes.BACKLOG
  )