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
        messages : str
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
        self.__messages: List[str]
            通知するメッセージのリスト

        self.__time : datetime
            通知時間

        self.__url : str
            通知するSlackチャンネルのhook先
        """
        self.__messages = MessageCleaner.clean(self.__messages)
        self.__time = DateTimeCleaner.clean(self.__time)
        self.__url = UrlCleaner.clean(self.__url)
        return self.__messages, self.__time, self.__url


class MessageCleaner(Cleaner):
    def __init__(self, messages):
        self.__messages = messages

    @staticmethod
    def clean(messages):
        """
        改行で分割してリストとして返します
        Parameter
        --------
        messages : str

        Returns
        --------
        creaned_messages_list : list
        """
        creaned_messages_list = messages.splitlines()
        return creaned_messages_list


class DateTimeCleaner(Cleaner):

    def __init__(self, datetime):
        self.__datetime = datetime

    @staticmethod
    def clean(str_date_time):
        """
        文字列型の日時をdatetime.datetime型に変換します。
        Parameter
        -------
        str_date_time : str
            文字列型の日付

        Returns
        -------
        creaned_date_time : datetime.datetime
            文字列型からdatetime.datetime型に変換した日付
        """
        replaced_date_time = str_date_time.replace('T', ' ')
        creaned_date_time = datetime.datetime.strptime(
            replaced_date_time, "%Y-%m-%d %H:%M")
        return creaned_date_time


class UrlCleaner(Cleaner):
    def __init__(self, url):
        self.__url = url

    @staticmethod
    def clean(url):
        return url
