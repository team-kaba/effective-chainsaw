from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import json
from .sample_time import hello_world_timer
import threading
from datetime import datetime
import time


class TimeRequstHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_len = int(self.headers.get("content-length"))
        request_body = json.loads(self.rfile.read(content_len).decode("utf-8"))
        

        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        return


if __name__ == "__main__":
    host = "localhost"
    port = 8080
    timer_thread = threading.Thread(target=hello_world_timer())
    server = HTTPServer((host, port), TimeRequstHandler)
    server.serve_forever()

# どこから時間を取ってくるかを抽象化する


# TODO 無限ループで登録された時刻になったらHello World

# 役割:メインスレッドを起動させる

# 役割:タイマーを起動させる

# 役割:スレッド(タイマー)を管理する

# 役割:set_timeを持ってくる

def hello_world_timer(set_time: str) -> None:
    # タイマーを設定してなんらかの処理する
    while(True):
        # いつからいつまでが許容なのか
        if(set_time == datetime.now().strftime("%Y/%m/%d %H:%M:%S")):

            print('hello')
            break
        time.sleep(1)
