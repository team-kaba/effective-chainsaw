from slackweb import Slack

web_hook_url = ""


def main():
    slack = Slack(web_hook_url)
    slack.notify(text='通知でますか？')


if __name__ == "__main__":
    main()
