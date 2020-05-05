from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from datetime import datetime
import time


FILE_TO_SERVE = 'src/content.json'


class TimeRequstHandler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Credentials', 'true')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers",
                         "X-Requested-With, Content-type")
        requestBody = json.loads(self.rfile.read().decode('utf-8'))
        print(requestBody)

    def do_POST(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Credentials', 'true')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header("Content-type", "text/xml")
        content_len = int(self.headers.get('content-length'))
        requestBody = json.loads(self.rfile.read(content_len).decode('utf-8'))
        print(requestBody)
        body = ''
        with open(FILE_TO_SERVE) as f:
            body = f.read()
        self.send_header("Content-length", str(len(body)))
        self.end_headers()
        print(type(body))
        self.wfile.write(body.encode('utf-8'))
        self.wfile.close()


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
