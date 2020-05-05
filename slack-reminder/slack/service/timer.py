# -*- coding: utf-8 -*-
import datetime
from threading import Thread
import logging


logger = logging.getLogger(__name__)
fmt = "%(asctime)s %(levelname)s %(name)s : %(message)s"
logging.basicConfig(level=logging.DEBUG, format=fmt)


class Timer(Thread):
    """
    決められた時刻にJobを実行する役割
    """

    def __init__(self, time, job):
        """

        Args:
            time : datetime
            job : Jobクラスを継承したクラス
        """
        super(Timer, self).__init__()
        self.__time = time
        self.__job = job

    def run(self):
        """
        時刻になったらJob実行

        """
        while True:
            now = datetime.datetime.now()
            print(now)
            print(self.__time)
            if datetime.datetime.now() >= self.__time:
                print("------------timer--------")
                return self.__job.run()
