import graphene
from graphene_django import DjangoObjectType

from gb_app.models import User, Project, Ticket

class UserType(DjangoObjectType):
  class Meta:
    model = User
    fields = ("id", "name", "github_email", "projects")

class ProjectType(DjangoObjectType):
  class Meta:
    model = Project
    fields = (
      "id", 
      "name", 
      "owner", 
      "date_created", 
      "repository", 
      "collaborators"
    )

class TicketType(DjangoObjectType):
  class Meta:
    model = Ticket
    fields = (
      "id",
      "name",
      "project",
      "description",
      "assigned_to",
      "state"
    )

class Query(graphene.ObjectType):
  get_user = graphene.Field(UserType, github_email=graphene.String(required=True))
  all_projects = graphene.List(ProjectType)

  def resolve_all_projects(root, info):
    return Project.objects.select_related("owner").all()

  def resolve_get_user(root, info, github_email):
    try:
      return User.objects.get(github_email=github_email)
    except User.DoesNotExist:
      return None






schema = graphene.Schema(query=Query)