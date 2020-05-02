from rest_framework import serializers
from .models import SlackNotification


class SlackNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = SlackNotification
        field = ('id', 'message', 'time', 'url')
