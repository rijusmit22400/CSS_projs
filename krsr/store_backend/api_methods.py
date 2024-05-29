#mlolga5axqcyfkllojizakk4k2kbwbrxkfbupy46nfdsoxhq5dwq
#rijusmit.biswas

#mysql server:iiitdmysql.mysql.database.azure.com
#username: rijusmit
#password: Mummy&papa

import password_hashing as hasher


def validate(username, password, users, password_hasher):
    """
    Validate the username and password.
    """
    if username in users and hasher.validate_password(password,password_hasher[username]) == True:
        return [True, "credentials_are_correct"]
    elif username in users and hasher.validate_password(password,password_hasher[username]) == False:
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
    new_user = User(id=len(users)+1,username=username, password=hasher.hash_password(password), full_name=full_name, email=email, role="customer")   
    db.add(new_user)
    return [True, "user_added"]

def add_customer(user_id, contact, address, db):
    """
    Add a new customer.
    """
    new_customer = Customer(id=user_id, contact=contact, address=address)
    db.add(new_customer)
    return [True, "customer_added"]