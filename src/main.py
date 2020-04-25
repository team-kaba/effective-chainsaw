from timer import Timer
import datetime
from job import SlackMessenger


if __name__ == "__main__":
    dt = datetime.datetime(2020, 4, 25, 1, 9, 00, 2000)
    web_hook_url = "https://hooks.slack.com/services/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"

    sm = SlackMessenger(web_hook_url, '通知でますか？')
    Timer(dt, sm).run()
