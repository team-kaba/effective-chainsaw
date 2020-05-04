from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from datetime import datetime
import time


class TimeRequstHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_len = int(self.headers.get("content-length"))
        request_body = json.loads(self.rfile.read(content_len).decode("utf-8"))
        print(request_body)
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        return


if __name__ == "__main__":
    host = "localhost"
    port = 8080
    server = HTTPServer((host, port), TimeRequstHandler)
    server.serve_forever()


def hello_world_timer(set_time: str) -> None:
    # タイマーを設定してなんらかの処理する
    while(True):
        # いつからいつまでが許容なのか
        if(set_time == datetime.now().strftime("%Y/%m/%d %H:%M:%S")):

            print('hello')
            break
        time.sleep(1)
