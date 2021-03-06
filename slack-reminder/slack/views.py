from rest_framework import generics
from .models import SlackNotification
from .serializer import SlackNotificationListSerializer
from .service.timer_creater import TimerCreater


class SlackNotificationListCreater(generics.ListCreateAPIView):
    queryset = SlackNotification.objects.all()
    serializer_class = SlackNotificationListSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)
        TimerCreater.create(request.data)
        return self.create(request, *args, **kwargs)
