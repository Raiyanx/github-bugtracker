from django.http import JsonResponse
from django.views import View
from django.core import serializers
from .models import User, Project
import json

class UserView(View):
  def get(self, request, *args, **kwargs):
    params = request.GET
    try:
      userQueryset = User.objects.filter(github_email__exact=params["github_email"])
      userQueryset.get()  # Checks that the queryset has one element
      data = serializers.serialize("json", userQueryset)
      data = json.loads(data)[0]
      data["message"] = "You retrieved a user"
      data["successful"] = True
      return JsonResponse(data)
    except:
      return JsonResponse({"message": "The user you searched for does not exist", "successful": False})
  
  def post(self, request, *args, **kwargs):
    body = json.loads(request.body.decode('utf-8'))
    newUser = User(
      name=body["name"],
      github_email=body["github_email"],
    )
    newUser.save()
    projects = body["projects"]
    for p in projects:
      newProject = Project(
        name = p["name"],
        own_project = p["own_project"],
        owner_email = p["owner_email"],
        link = p["link"]
      )
      newProject.save()
      newUser.projects.add(newProject)
      for c in p["collaborators"]:
        userQuerySet = User.objects.filter(github_email=c)
        if userQuerySet.exists():
          newProject.collaborators.add(userQuerySet.get())
        else:
          inactiveUser = User(
            github_email = c,
            active = False
          )
          inactiveUser.save()
          inactiveUser.projects.add(newProject)
          newProject.collaborators.add(inactiveUser)
    return JsonResponse({"message": "You just created a new user"})

