from .timer import Timer
from .job import SlackMessenger
from .cleaner import RequestCleaner


class TimerManager():
    """
    Timerをたくさん作る役割
    """

    def __init__(self, form=None):
        self.__timers = None
        self.__form = form

    @staticmethod
    def create_timer(messages, time, url):
        messages, time, url = RequestCleaner(messages, time, url).clean()
        for message in messages:
            job = SlackMessenger(url, message)
            Timer(time, job).start()
