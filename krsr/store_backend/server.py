from urllib import response
from flask import Flask, request, redirect, session
import db_connect as db
from api_methods import validate, add_user, add_customer
import json as js
from flask_cors import CORS
import jwt_tokens as tokens
from flask import jsonify

secret = tokens.secret_key


ses = db.session()
con = db.conn
USER = db.User
CUSTOMER = db.Customer
PRODUCT = db.Product
CATEGORY = db.Category

app = Flask(__name__)
app.secret_key = secret

CORS(app,origins="http://localhost:5173", allow_headers="Content-Type", supports_credentials=True)

@app.route('/login', methods=['POST'])
def login():
    print("Request Accpeted ,Logging in")
    username = request.form['username']
    password = request.form['password']
    users = ses.query(USER).all()
    password_hasher = {i.username: i.password for i in users}
    usernames = [i.username for i in users]
    status = validate(username, password, usernames, password_hasher)
    if(status[0]==False):
        return redirect("http://localhost:5173/auth_register")
    payload = {"payload": {"username": username, "key": str(password_hasher[username])}}
    auth_token = tokens.generate_token({"payload": payload})
    session['auth_token'] = auth_token
    session['username'] = username
    e_paylaod = {"payload": "payload", "token": auth_token}
    return redirect(f"http://localhost:5173/home?username={username}&key={str(password_hasher[username])}")


@app.route('/auth_payload', methods=['GET'])
def look(payload):
    return jsonify(payload)

@app.route('/register', methods=['POST'])
def register():
    print("Request Accpeted ,Registering")
    print(request.form)
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
        add_customer(len(users)+1, contact, address, ses)
    ses.commit()
    return redirect("http://localhost:5173/auth_login")

@app.route('/call/product/<id>', methods=['GET'])
def product(id):
    products = ses.query(PRODUCT).filter(PRODUCT.category_id == id).all()
    print("Request Accpeted ,Product")
    category = ses.query(CATEGORY).filter(CATEGORY.id == id).first()
    output = { "name": category.description, "items":[{"item":products[i].name, "description":products[i].description, "price":products[i].price, "stock":products[i].quantity} for i in range(len(products))]}
    return output

if __name__ == '__main__':
    users = ses.query(USER).all()
    app.run(host='localhost', port=5000, debug=True)