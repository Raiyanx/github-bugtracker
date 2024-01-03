from django.http import JsonResponse
from django.views import View
from django.core import serializers
from .models import User, Project
import json


class UserView(View):
  def get(self, request, *args, **kwargs):
    try:
      params = request.GET
      userQueryset = User.objects.filter(github_email=params.get('github_email'))
      userQueryset.get()  # Checks that the queryset has one element
      userData = serializers.serialize("json", userQueryset)
      userData = json.loads(userData)[0]
      data = {}
      data["user"] = userData["fields"]
      projectsQueryset = Project.objects.filter(owner__github_email=data["user"]["github_email"])
      projectData = serializers.serialize("json", projectsQueryset)
      projectData = json.loads(projectData)
      print(projectData)
      data["user"]["projects"] = [p["fields"] for p in projectData]
      data["message"] = "You retrieved a user"
      data["successful"] = True
      return JsonResponse(data)
    except:
      return JsonResponse({"message": "The user you searched for does not exist", "successful": False})
  
  def post(self, request, *args, **kwargs):
    try:
      body = json.loads(request.body.decode('utf-8'))    
      userQueryset = User.objects.filter(github_email=body["github_email"])
      if userQueryset:
        return JsonResponse({"message": "The user already exists", "successful": False}) 
      newUser = User(
        name=body["name"],
        github_email=body["github_email"],
      )
      newUser.save()
      projects = body["projects"] if body["projects"] else []
      for p in projects:
        newProject = Project(
          name = p["name"],
          owner = newUser
        )
        newProject.save()
        # for c in p["collaborators"]:
        #   userQuerySet = User.objects.filter(github_email=c)
        #   if userQuerySet.exists():
        #     newProject.collaborators.add(userQuerySet.get())
        #   else:
        #     inactiveUser = User(
        #       github_email = c,
        #       active = False
        #     )
        #     inactiveUser.save()
        #     inactiveUser.projects.add(newProject)
        #     newProject.collaborators.add(inactiveUser)
      return JsonResponse({"message": "You just created a new user", "successful": True})
    except Exception as error:
      print("Error: ", error)
      return JsonResponse({"message": "Could not create user", "successful": False})
  
  def delete(self, request, *args, **kwargs):
    try:
      body = json.loads(request.body.decode('utf-8'))    
      userQueryset = User.objects.filter(github_email=body["github_email"])
      if not userQueryset:
        return JsonResponse({"message": "The user does not exist", "successful": False}) 
      userQueryset.delete()
      # Also delete projects related to that user

      return JsonResponse({"message": "Successfully deleted user", "successful": True})
    except:
      return JsonResponse({"message": "Could not delete user", "successful": False})
