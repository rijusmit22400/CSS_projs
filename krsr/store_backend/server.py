from math import e
import re
from flask import Flask, request, redirect, session, Response
import db_connect as db
from api_methods import validate, add_user, add_customer
from flask_cors import CORS
import jwt_tokens as tokens
from flask import jsonify
import datetime 

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
    #-----------------------------validation------------------------------------
    testing = request.get_json()
    print()
    print("Request Accpeted ,Logging in")
    username = testing['username']
    password = testing['password']
    users = ses.query(USER).all()
    password_hasher = {i.username: i.password for i in users}
    usernames = [i.username for i in users]
    status = validate(username, password, usernames, password_hasher)
    role = "customer"
    if(status[0]==False):
        return redirect("http://localhost:5173/auth_register")
    
    
    #-------------after validation----------------
    timestamp = datetime.datetime.now()
    
    payload = {"payload": {"username": username, "key":password_hasher[username] ,"timestamp": str(timestamp) , "role" : role}} # type: ignore
    auth_token = tokens.generate_token({"payload": payload})
    session['auth_token'] = auth_token
    session['username'] = username
    e_paylaod = {"payload": payload, "token": auth_token}
    Response = jsonify(e_paylaod)
    Response.headers["Authorization"] = session['auth_token']
    return Response

@app.route('/register', methods=['POST'])
def register():
    print("Request Accpeted ,Registering")
    source = request.get_json()
    username = source['username']
    full_name = source['full_name']
    password = source['password']
    contact = source['contact']
    address = source['address']
    email = source['email']
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
    output = { "name": category.description, "items":[{"item":products[i].name, "description":products[i].description, "price":products[i].price, "stock":products[i].quantity} for i in range(len(products))]} # type: ignore
    return output

@app.route('/validate_token', methods=['POST'])
def validate_token():
    print("Request Accpeted ,Validating Token")
    token = request.headers['Authorization']
    details = request.get_json()
    name = details['username']
    key = details['key']
    payload = tokens.validate_token(token)
    try:
        if(payload['username'] == name and payload['key'] == key):
            return "Valid"
    except:
        return "Invalid"
    finally:
        return "Invalid" 

if __name__ == '__main__':
    users = ses.query(USER).all()
    app.run(host='localhost', port=5000, debug=True)