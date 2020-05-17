from .timer import Timer
from .job import SlackMessenger
from .cleaner import DateTimeCleaner


class TimerCreater():
    """
    Timerをたくさん作る役割
    """

    @staticmethod
    def create(requests):
        """
        Parameter
        ----------
        requests : [{message:'', time: '', url: ''}]
        """
        for request in requests:
            job = SlackMessenger(request['url'], request['message'])
            creaned_datetime = DateTimeCleaner.clean(request['time'])
            Timer(creaned_datetime, job).start()
