import re
from datetime import datetime

from flask import Flask

app = Flask(__name__)


@app.route('/')
def home():
    return 'Home'


@app.route('/signup')
def sign_up():
    return 'Sign-up'