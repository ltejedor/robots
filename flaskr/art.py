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

@bp.route('/give')
def give():
    db = get_db()
    return render_template('art/give.html')


@bp.route('/address')
def address():
    db = get_db()
    return render_template('art/address.html')

@bp.route('/check')
def check():
    db = get_db()
    return render_template('art/check.html')

@bp.route('/pay')
def pay():
    db = get_db()
    return render_template('art/pay.html')


@bp.route('/checknum')
def checknum():
    db = get_db()
    return render_template('art/checknum.html')


@bp.route('/wordselection')
def wordselection():
    db = get_db()
    return render_template('art/wordselection.html')


@bp.route('/loading')
def loading():
    db = get_db()
    return render_template('art/loading.html')


@bp.route('/claim')
def claim():
    db = get_db()
    return render_template('art/claim.html')
