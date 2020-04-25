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

    def __init__(self, web_hook_url, sent_message):
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

    def run(self):
        slack = Slack(self.__url)
        slack.notify(text=self.__message)
