from slackweb import Slack

web_hook_url = "https://hooks.slack.com/services/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"


def main():
    slack = Slack(web_hook_url)
    slack.notify(text='通知でますか？')


if __name__ == "__main__":
    main()
