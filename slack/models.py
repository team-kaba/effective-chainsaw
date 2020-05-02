from django.db import models

# Create your models here.


class SlackNotification(models.Model):
    message = models.CharField(max_length=1000)
    time = models.DateTimeField()
    url = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
