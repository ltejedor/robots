import os

import json, requests
from flask import Flask, request, jsonify


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    @app.route("/image")
    def send_image():
        url = 'https://siasky.net/skynet/skyfile'
        image_location = '/app/flaskr/images/137439.jpeg'
        files = {'media': open(image_location, 'rb')}
        response = requests.post(url, files=files)
        link = json.loads(response.text)
        return link["skylink"], 201

    from . import db
    db.init_app(app)

    from . import art
    app.register_blueprint(art.bp)
    app.add_url_rule('/', endpoint='index')

    return app
