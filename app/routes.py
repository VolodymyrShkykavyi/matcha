from flask import render_template, flash, redirect, request, url_for
from app import app


@app.route('/index')
@app.route('/')
def index():
	user = {'username': 'admin'}
	flash('sdfsdf')
	return render_template('index.html', user=user, title='Home page')


@app.route('/login', methods=['GET', 'POST'])
def login():
	if request.method == 'POST':
		# return 'OK'
		return redirect(url_for('index'))
	return render_template('login.html', title='Sign in')