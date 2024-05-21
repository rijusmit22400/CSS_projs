def validate(username, password, users, password_hasher):
    """
    Validate the username and password.
    """
    if username in users and password_hasher[username] == password:
        return [True, "credentials_are_correct"]
    elif username in users and password_hasher[username] != password:
        return [False, "password_does_not_exist"]
    else:
        return [False, "username_does_not_exist"]
    
from db_connect import User, Customer    
    
def add_user(username, password, full_name, email, db, users):
    """
    Add a new user.
    """
    if username in users:
        return [False, "username_already_exists"]
    new_user = User(id=len(users)+1,username=username, password=password, full_name=full_name, email=email, role="customer")   
    db.add(new_user)
    return [True, "user_added"]

def add_customer(user_id, contact, address, db):
    """
    Add a new customer.
    """
    new_customer = Customer(id=user_id, contact=contact, address=address)
    db.add(new_customer)
    return [True, "customer_added"]