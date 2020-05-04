from django.urls import path
from .views import SlackNotificationListCreater

urlpatterns = [
    path('api/slack/', SlackNotificationListCreater.as_view()),
]
