from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

from flaskr.db import get_db

bp = Blueprint('art', __name__)

@bp.route('/')
def index():
    db = get_db()
    return render_template('art/index.html')

@bp.route('/connect')
def connect():
    db = get_db()
    return render_template('art/connect.html')
