from .timer import Timer
from .job import SlackMessenger
from .cleaner import DateTimeCleaner


class TimerManager():
    """
    Timerをたくさん作る役割
    """

    def __init__(self, form=None):
        self.__timers = None
        self.__form = form

    @staticmethod
    def create_timer(requests):
        """
        Parameter
        ----------
        requests : [{message:'', time: '', url: ''}]
        """
        for request in requests:
            job = SlackMessenger(request['url'], request['message'])
            creaned_datetime = DateTimeCleaner.clean(request['time'])
            Timer(creaned_datetime, job).start()
