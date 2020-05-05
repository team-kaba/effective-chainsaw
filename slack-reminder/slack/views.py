from rest_framework import generics
from .models import SlackNotification
from .serializer import SlackNotificationSerializer
from .service.timer_manager import TimerManager


class SlackNotificationListCreater(generics.ListCreateAPIView):
    queryset = SlackNotification.objects.all()
    serializer_class = SlackNotificationSerializer

    def post(self, request, *args, **kwargs):
        messages = request.data['message']
        time = request.data['time']
        url = request.data['url']
        TimerManager.create_timer(messages, time, url)
        return self.create(request, *args, **kwargs)
