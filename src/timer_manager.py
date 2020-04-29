# -*- coding: utf-8 -*-
from timer import Timer


class TimerManager():
    """
    Timerをたくさん作る役割
    """

    def __init__(self, form=None):
        self.__timers = None
        self.__form = form

    @staticmethod
    def set_timer(requests, cls_name):
        # TODO メッセージの数だけTimerオブジェクトを作成する
        # TODO タイマーオブジェクトを作成したら実行する
        for request in requests:
            Timer(request).start()
