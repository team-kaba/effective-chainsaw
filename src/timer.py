import datetime


class Timer():
    """
    Timerクラスの役割:決められた時刻にJobを実行する役割
    現在時刻と設定された時刻を常に比較
    ↓
    決められた時刻にJobを実行
    """

    def __init__(self, time, job):
        """
        set_time : datatime
        """
        self.__time = time
        self.__job = job

    def run(self):
        """
        時刻になったらJob実行

        """
        while True:
            # TODO 現在時刻と保存記録を比較する
            # TODO ＝の場合、保存記録に基づいたJobを実行する
            if datetime.datetime.now() >= self.__time:
                self.__job.run()
                print("ジョブを実行しました")
                break

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
