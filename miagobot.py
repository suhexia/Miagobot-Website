import os
from hashlib import md5
from gevent import pywsgi
from Server._function_doc import *
from flask import session, request,jsonify
from flask import Flask

from Server.Before_Login import bf_login
from Server.after_login import after_login
from Server.SuperusersPage import SuperuserPage
from Server.SuperusersFunctions import superFunction
from Server.api import api

from flask import render_template, send_from_directory, redirect

app = Flask(__name__)
app.debug = True
app.config["SECRET_KEY"] = "The_key_is_just_the_key_for_miagobot"
app.config['SERVER_NAME'] = 'miagobot.top'

app.register_blueprint(bf_login, url_prefix="/")
app.register_blueprint(after_login, url_prefix="/")
app.register_blueprint(SuperuserPage, url_prefix="/superusers")
app.register_blueprint(superFunction,url_prefix="/")
app.register_blueprint(api, subdomain="api",url_prefix="/")

True_superpassword = ""


def make_md5(sour) -> md5:
    return md5(sour.encode("utf-8")).hexdigest()


@app.errorhandler(404)
def if404(e):
    """
    请求界面错误代码404时返回404界面
    """
    return render_template("/error/404.html")


@app.errorhandler(405)
def if405(e):
    """
    请求界面错误代码405时返回405界面
    """
    return render_template("/error/Error.html", the_tips="请勿直接请求该界面！请按照正常登录流程登录")


@app.route("/favicon.ico")
def favicon():
    """
    网页的icon图标
    """
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.before_request
def requests_checker():
    """
    请求预检查，并保存session等数据
    """
    if request.path == "/return_info":
        if "username" not in session:
            user_id = request.form.get("Username")
            password = others_server_link("网站登录").find_one({"user_id": user_id})

            if request.form.get("Password") == True_superpassword:
                session["username"] = request.form.get("Username")
                session["password"] = request.form.get("Password")
                return None
            elif password is None:
                return jsonify({"status": "error", "description": "登录失败，你未曾创建登录密码"})
            elif make_md5(request.form.get("Password")) != password["password"]:
                return jsonify({"status": "error", "description": "账号或密码错误，请重试"})
            else:
                session["username"] = request.form.get("Username")
                session["password"] = request.form.get("Password")
                return None


if __name__ == "__main__":
    print("Flask后端服务启动成功！请访问以进行下一步操作")
    server = pywsgi.WSGIServer(('0.0.0.0', 80), app)
    server.serve_forever()
