from django.urls import path

from gb_app.user import UserView 
from gb_app.project import ProjectView

urlpatterns = [
    path("", UserView.as_view(), name="user-view"),
    path("projects/", ProjectView.as_view(), name="project-view")
]