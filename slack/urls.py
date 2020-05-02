from django.urls import path
from . import views

urlpatterns = [
    path('api/slack/', views.SlackNotificationListCreater.as_view() ),
]