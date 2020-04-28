from timer import Timer
import datetime
from job import SlackMessenger


request_list = [{"message": "通知1", "time": "2020-04-28-12-00-00",
                 "url": "https://hooks.slack.com/services/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"},
                {"message": "通知2", "time": "2020-04-28-12-01-00",
                 "url": "https://hooks.slack.com/services/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"},
                {"message": "通知3", "time": "2020-04-28-12-01-00",
                 "url": "https://hooks.slack.com/services/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"},
                ]

if __name__ == "__main__":
    sm = SlackMessenger(request_list)
    Timer(dt, sm).run()
