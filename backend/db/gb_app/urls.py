from django.urls import path

from gb_app.views import UserView, ProjectView

urlpatterns = [
    path("", UserView.as_view(), name="user-view"),
    path("projects/", ProjectView.as_view(), name="project-view")
]