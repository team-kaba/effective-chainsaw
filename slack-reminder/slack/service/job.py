# -*- coding: utf-8 -*-
from slackweb import Slack
from abc import ABCMeta, abstractmethod


class Job(metaclass=ABCMeta):
    """
    何らかのJobを実行する
    """
    @abstractmethod
    def run(self):
        pass


class SlackMessenger(Job):
    """
    特定のチャンネルにメッセージを送る
    """

    def __init__(self, web_hook_url, sent_message, channel="#coffee", username="coffee-bot", icon_emoji=":coffee"):
        """
        Parameter
        -------------
        web_hook_url : str
           フック先のURL

        sent_message : str
           チャンネルに送信するメッセージ
        """
        self.__url = web_hook_url
        self.__message = sent_message
        self.__channel = channel
        self.__username = username
        self.__icon_emoji = icon_emoji

    def run(self):
        slack = Slack(self.__url)
        slack.notify(text=self.__message)
