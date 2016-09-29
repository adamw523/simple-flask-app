from flask import Flask, current_app

app = Flask(__name__)

@app.route('/')
def index():
    return "<html><head><link rel='stylesheet' href='static/bundle.css'></head><body>hi there<script src='static/bundle.js'></script></body></html>"

@app.route('/debug')
def debug():
    assert current_app.debug == False
