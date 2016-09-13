from flask import Flask, current_app

app = Flask(__name__)

@app.route('/')
def index():
    return "hi there"

@app.route('/debug')
def debug():
    assert current_app.debug == False
