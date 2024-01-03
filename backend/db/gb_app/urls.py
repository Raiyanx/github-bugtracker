from django.urls import path

from gb_app.user import UserView 
from gb_app.project import ProjectView
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from gb_app.schema import schema


urlpatterns = [
  # path("", UserView.as_view(), name="user-view"),
  # path("projects/", ProjectView.as_view(), name="project-view"),
  path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema)))
]