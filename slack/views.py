from rest_framework import generics
from .models import SlackNotification
from .serializer import SlackNotificationSerializer


class SlackNotificationListCreater(generics.ListAPIView):
    queryset = SlackNotification.objects.all()
    serializer_class = SlackNotificationSerializer
