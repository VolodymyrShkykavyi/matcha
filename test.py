from flask import Flask
from pprint import pprint

app = Flask(__name__)

@app.route('/')
def index():
	return '<h1>hello</>'

@app.route('/home', methods=['GET', 'POST'])

def home():
	el = ['asd', 'as']
	print(el)
	return 'home page view__' + '__end'
	
def home2():
	home()
	return 'home2'



if __name__ == '__main__':
	app.run(debug=True)
