# -*- coding: utf-8 -*-
from timer import Timer


class TimerManager():
    """
    Timerをたくさん作る役割
    # TODO Djnagoで作ったときにいらないかも？
    """

    def __init__(self, form=None):
        self.__timers = None
        self.__form = form

    @staticmethod
    def set_timer(requests, job):
        # TODO 引数を決める
        # TODO メッセージの数だけTimerオブジェクトを作成する
        # TODO タイマーオブジェクトを作成したら実行する
        for request in requests:
            Timer(request, job).start()
