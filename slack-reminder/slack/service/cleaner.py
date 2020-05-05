from abc import ABCMeta, abstractmethod
import datetime


class Cleaner(metaclass=ABCMeta):
    @abstractmethod
    def clean(self):
        pass


class RequestCleaner(metaclass=ABCMeta):
    def __init__(self, messages, time, url):
        """
        Parameter
        -----------
        messages : dict
            フォームで送られてくるメッセージ
        time : str
            フォームで送られてくる日時
        url : str
            フォームで送られてURL
        """
        self.__messages = messages
        self.__time = time
        self.__url = url

    def clean(self):
        """
        Returns
        ----------
        self.__messages: List<str>
            通知するメッセージのリスト

        self.__time : datetime
            通知時間

        self.__url : str
            通知するSlackチャンネルのhook先
        """
        self.__messages = MessageCleaner(self.__messages).clean()
        self.__time = DateTimeCleaner(self.__time).clean()
        self.__url = UrlCleaner(self.__url).clean()
        return self.__messages, self.__time, self.__url


class MessageCleaner(Cleaner):
    def __init__(self, messages):
        self.__messages = messages

    def clean(self):
        creaned_messages_list = self.__messages.splitlines()
        return creaned_messages_list


class DateTimeCleaner(Cleaner):

    def __init__(self, datetime):
        self.__datetime = datetime

    def clean(self):
        replaced_date_time = self.__datetime.replace('T', ' ')
        creaned_date_time = datetime.datetime.strptime(
            replaced_date_time, "%Y-%m-%d %H:%M")
        return creaned_date_time


class UrlCleaner(Cleaner):
    def __init__(self, url):
        self.__url = url

    def clean(self):
        return self.__url
