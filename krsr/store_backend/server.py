from shlex import join
from flask import Flask, request, redirect, session, Response
from matplotlib import category
import db_connect as db
from api_methods import validate, add_user, add_customer, adding_to_cart
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
CART = db.Cart

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
        id_new = ses.query(USER).filter(USER.username == username).first()
        add_customer(id_new, contact, address, ses)
    ses.commit()
    return redirect("http://localhost:5173/auth_login")

@app.route('/call/product/<id>', methods=['GET'])
def product(id):
    products = ses.query(PRODUCT).filter(PRODUCT.category_id == id).all()
    print("Request Accpeted ,Product")
    category = ses.query(CATEGORY).filter(CATEGORY.id == id).first()
    output = { "name": category.description, "items":[{"p_id": products[i].id,"item":products[i].name, "description":products[i].description, "price":products[i].price, "stock":products[i].quantity} for i in range(len(products))]} # type: ignore
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
        if(payload['username'] == name and payload['key'] == key): #type: ignore
            return "Valid"
    except:
        return "Invalid"
    finally:
        return "Invalid" 
    
@app.route('/call/cart', methods = ['POST'])
def add_to_cart():
    print("Adding ITem to cart")
    item = request.get_json()
    print(item)
    item_id = ses.query(USER).filter(USER.username==item["user"]).first()
    print(item_id.id)#type: ignore
    status = adding_to_cart(item_id.id,item["p_id"],item["quantity"],ses) #type: ignore
    print(status)
    ses.commit()
    return status

@app.route('/show_cart/<username>',methods = ['GET'])
def show_cart(username):
    # Fetch the user_id for the given username
    user = ses.query(USER).filter(USER.username == username).first()
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    user_id = user.id

    # Join the CART and PRODUCT tables on the condition that PRODUCT.id matches CART.product_id
    joint_table = (ses.query(CART, PRODUCT)
                   .join(PRODUCT, CART.product_id == PRODUCT.id)
                   .filter(CART.customer_id == user_id)
                   .all())

    # Extract the required information and prepare the output
    output = [{"username": username, 
               "name": product.name, 
               "description": product.description, 
               "price": product.price, 
               "quantity": cart.quantity} for cart, product in joint_table]

    # Return the output as JSON
    return jsonify(output)

@app.route('/show_details/<username>', methods=['GET'])
def show_details(username):
    print("Request Accpeted ,Showing Details")
    user = ses.query(USER).filter(USER.username == username).first()
    if not user:
        return jsonify({"error": "User not found"}), 404
    user_id = user.id
    customer = ses.query(CUSTOMER).filter(CUSTOMER.user_id == user_id).first()
    if not customer:
        return jsonify({"error": "Customer not found"}), 404
    output = {"username": username, "contact": customer.contact, "address": customer.address, "email": user.email, "full_name": user.full_name}
    return jsonify(output)

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)