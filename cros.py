from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


@app.before_request
def set_headers():
    # 设置跨域头部信息
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
        'X-Powered-By': '3.2.1'
    }
    if request.method == 'OPTIONS':
        return jsonify('ok'), 200, headers
    else:
        # 继续处理请求
        pass


@app.route('/')
def get_data():
    img_url = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN'
    response = requests.get(img_url)
    return response.text, response.status_code, {'Content-Type': 'application/json;charset=utf-8'}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4321)
