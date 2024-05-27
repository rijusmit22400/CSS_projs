import bcrypt

def hash_password(password: str) -> str:
    """
    Hash the password.
    """
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(rounds=12)).decode('utf-8')

def validate_password(password: str, hashed_password: str) -> bool:
    """
    Validate the password.
    """
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))


passwords = [
    "password1", "password2", "password3", "password4", "password5", 
    "password6", "password7", "password8", "password9", "password10", 
    "password11", "password12", "juicejuicejuice"
]

hashed_passwords = []

# Generate bcrypt hashed passwords
for password in passwords:
    # Convert the password to bytes
    password_bytes = password.encode('utf-8')
    # Generate the salt
    salt = bcrypt.gensalt()
    # Hash the password
    hashed = bcrypt.hashpw(password_bytes, salt)
    # Append the hashed password to the list
    hashed_passwords.append(hashed.decode('utf-8'))

# Print the hashed passwords
for i, hashed in enumerate(hashed_passwords, start=1):
    print(f"Hashed password{i}: {hashed}")
