import React from "react";
import "./Register.css";

function Register() {
  return (
    <div>
        <div id="auth">
            <p id="store-name">Trinity</p>
            <p id="login">Login</p>
            <form action="/register" method="POST">
                <fieldset>
                <label htmlFor="full_name">Full Name:<input type="text" name="full_name" required/></label>
                <label htmlFor="username">Username:<input type="text" name="username" required/></label>
                <label htmlFor="password">Password:<input type="password" name="password" required/></label>
                <label htmlFor="contact">Contact:<input type="text" name="contact" required/></label>
                <label htmlFor="address">Address:<input type="text" name="address" required/></label>
                <label htmlFor="email">Email:<input type="text" name="email"/></label>
                </fieldset>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  );
}

export default Register;