# from django.http import JsonResponse
# from django.views import View
# from django.core import serializers
# from .models import User, Project
# import json

    
# # class UserView(View):
# #   def get(self, request, *args, **kwargs):
# #     params = request.GET
# #     try:
# #       userQueryset = User.objects.filter(github_email=params["github_email"])
# #       userQueryset.get()  # Checks that the queryset has one element
# #       data = serializers.serialize("json", userQueryset)
# #       data = json.loads(data)[0]
# #       data["message"] = "You retrieved a user"
# #       data["successful"] = True
# #       return JsonResponse(data)
# #     except:
# #       return JsonResponse({"message": "The user you searched for does not exist", "successful": False})
  
# #   def post(self, request, *args, **kwargs):
# #     body = json.loads(request.body.decode('utf-8'))
# #     newUser = User(
# #       name=body["name"],
# #       github_email=body["github_email"],
# #     )
# #     newUser.save()
# #     projects = body["projects"]
# #     for p in projects:
# #       newProject = Project(
# #         name = p["name"],
# #         link = p["link"]
# #       )
# #       newProject.save()
# #       newUser.projects.add(newProject)
# #       for c in p["collaborators"]:
# #         userQuerySet = User.objects.filter(github_email=c)
# #         if userQuerySet.exists():
# #           newProject.collaborators.add(userQuerySet.get())
# #         else:
# #           inactiveUser = User(
# #             github_email = c,
# #             active = False
# #           )
# #           inactiveUser.save()
# #           inactiveUser.projects.add(newProject)
# #           newProject.collaborators.add(inactiveUser)
# #     return JsonResponse({"message": "You just created a new user"})


# # class ProjectView(View):
# #   def get(self, request, *args, **kwargs):
# #     params = request.GET
# #     try:
# #       userQueryset = User.objects.filter(github_email=params["github_email"])
# #       user = userQueryset.get()  # Checks that the queryset has one element
# #       projectsQueryset = user.projects.all()
# #       data = serializers.serialize("json", projectsQueryset)
# #       data = json.loads(data)
# #       alldata = {}
# #       alldata["message"] = "You retrieved a user"
# #       alldata["successful"] = True
# #       alldata["data"] = data
# #       return JsonResponse(alldata)
# #     except:
# #       return JsonResponse({"message": "Could not fetch projects for user", "successful": False})
    
# #   def post(self, request, *args, **kwargs):
# #     body = json.loads(request.body.decode('utf-8'))
# #     try:
# #       userQuerySet = User.objects.filter(github_email=body["github_email"])
# #       user = userQuerySet.get()
# #       projectsQueryset = user.projects.filter(name=body["project_name"])
# #       if not projectsQueryset.exists() :
# #         newProject = Project(
# #           name=body["project_name"],
# #           link=body["link"]
# #         )
# #         newProject.save()
# #         for c in body["collaborators"]:
# #           collaboratorQuerySet = User.objects.filter(github_email=body["github_email"])
# #           if collaboratorQuerySet.exists():
# #             newProject.add(collaboratorQuerySet.get())
# #           else:
# #             newUser = User(
# #               github_email = c,
# #               active = False
# #             )
# #             newProject.add(newUser)
# #         user.add(newProject)
# #       return JsonResponse({"message": "You just created a new project"})
# #     except:
# #       return JsonResponse({"message": "Couldn't load projects for the user", "successful": False})