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
            time : datatime
            job : Jobクラスを継承したクラス
        """
        self.__time = time
        self.__job = job

    def run(self):
        """
        時刻になったらJob実行

        """
        while True:
            if datetime.datetime.now() >= self.__time:
                return self.__job.run()

    def set_time(self, time):
        """
        Parameters
        ----------
        time : datetime
            Jobの実行時刻
        job : Job
        """
        # TODO 実行時刻を記録する
        self.__set_time = time
