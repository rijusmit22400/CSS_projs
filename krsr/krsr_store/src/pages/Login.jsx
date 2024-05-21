import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
        <div id="auth">
            <p id="store-name">Trinity</p>
            <p id="login">Login</p>
            <form action="/login" method="POST">
                <fieldset>
                <label htmlFor="username">Username:<input type="text" name="username" required/></label>
                <label htmlFor="password">Password:<input type="password" name="password" required/></label>
                </fieldset>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  );
}

export default Login;