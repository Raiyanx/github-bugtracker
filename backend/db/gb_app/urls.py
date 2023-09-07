from django.urls import path

from gb_app.views import UserView

urlpatterns = [
    path("", UserView.as_view(), name="user-view"),
]