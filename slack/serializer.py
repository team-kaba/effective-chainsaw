from rest_framework import serializers
from .models import SlackNotification


class SlackNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = SlackNotification
        fields = ('id', 'message', 'time', 'url')
