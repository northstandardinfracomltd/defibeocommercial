import os
import logging
from flask import Flask, render_template

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Initialize the app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "edixmatic-secret-key")

@app.route('/')
def index():
    return render_template('index.html')

# Routes pour les pages supplémentaires
@app.route('/log')
def login_page():
    return render_template('log.html')

@app.route('/conditions')
def conditions_page():
    return render_template('conditions.html')

@app.route('/confidentialite')
def confidentialite_page():
    return render_template('confidentialite.html')

# Routes pour les versions en langues étrangères
@app.route('/es')
def spanish_page():
    return render_template('es_new.html')

@app.route('/de')
def german_page():
    return render_template('de.html')

@app.route('/eng')
def english_page():
    return render_template('eng.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
