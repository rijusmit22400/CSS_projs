import React from "react";
import "./Register.css";

function Register() {
  return (
    <div>
      <div id="auth">
            <p id="store-name">Trinity</p>
            <p id="login">Register</p>
            <form action="/register">
                <fieldset>
                <label htmlFor="full_name">Full Name:<input type="text" name="full_name"/></label>
                <label htmlFor="username">Username:<input type="text" name="username"/></label>
                <label htmlFor="email">Email:<input type="text" name="email"/></label>
                <label htmlFor="password">Password:<input type="password" name="password"/></label>
                <label htmlFor="contact">Contact:<input type="text" name="contact"/></label>
                <label htmlFor="address">Address:<input type="text" name="address"/></label>
                </fieldset>
                <div className="gap"></div>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  );
}

export default Register;