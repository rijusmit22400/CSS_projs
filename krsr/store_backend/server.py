from flask import Flask, request, redirect
import db_connect as db
from authentication import validate, add_user, add_customer
from flask_cors import CORS


ses = db.session()
con = db.conn
USER = db.User
CUSTOMER = db.Customer

app = Flask(__name__)
cors = CORS(app, origins="http://localhost:5173/", supports_credentials=True)

@app.route('/login', methods=['POST'])
def login():
    print("Request Accpeted ,Logging in")
    username = request.form['username']
    password = request.form['password']
    users = ses.query(USER).all()
    password_hasher = {i.username: i.password for i in users}
    usernames = [i.username for i in users]
    status = validate(username, password, usernames, password_hasher)
    print(status)
    if(status[0]==False):
        return "Login failed"
    return redirect("http://localhost:5173/home")

@app.route('/register', methods=['POST'])
def register():
    print("Request Accpeted ,Registering")
    username = request.form['username']
    full_name = request.form['full_name']
    password = request.form['password']
    contact = request.form['contact']
    address = request.form['address']
    email = request.form['email']
    users = ses.query(USER).all()
    usernames = [i.username for i in users]
    status_user = add_user(username, password, full_name, email, ses, usernames)
    if(status_user[0]):
        status_customer = add_customer(len(users)+1, contact, address, ses)
    print(status_customer)
    return redirect("http://localhost:5173/login")

if __name__ == '__main__':
    users = ses.query(USER).all()
    app.run(host='localhost', port=5000, debug=True)