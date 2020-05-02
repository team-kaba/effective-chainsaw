# -*- coding: utf-8 -*-
import sys
import os
sys.path.append(os.getcwd())
from src.job import Job
from src.timer import Timer
import unittest
from datetime import datetime, timedelta


class TimerTests(unittest.TestCase):

    def test_run(self):
        """
        テスト観点:Jobが定時実行されているか
        """
        now = datetime.now()
        expected_time = now + timedelta(seconds=5)
        execution_time = now + timedelta(seconds=4)
        job_test = JobTest()

        # 1秒の誤差は許容する前提
        # TODO モックを使用してテストを行うべき？
        self.assertTrue(expected_time >= Timer(execution_time, job_test).run())


class JobTest(Job):
    """
    Jobクラスを継承したテストクラス
    """

    def run(self):
        """
        Returns:
            datatime: 現在時刻を返却する
        """
        return datetime.now()


if __name__ == "__main__":
    unittest.main()
