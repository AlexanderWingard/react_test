from flask import Flask
from datetime import datetime
import re

app = Flask(__name__)

@app.route("/hello")
def home():
    return "Hello, Flask!"