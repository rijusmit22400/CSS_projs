import React from "react";
import "./Login.css";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle_login = (event) => {
    event.preventDefault();
    alert("Logging in");
    const payload = {
      username: username,
      password: password
    }
    fetch("/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(Response=>{
      if(Response.ok){
        const token = Response.headers.get("Authorization")
        Response.json().then(data => {
          const store_username = data.payload.payload.username;
          const store_key = data.payload.payload.key;
          localStorage.setItem("user", store_username);
          localStorage.setItem("key", store_key);
        });
        localStorage.setItem("token", token)
        const store_user = localStorage.getItem("user");
        const store_key = localStorage.getItem("key");
        window.location.href = `/home?name=${store_user}&key=${store_key}`
        console.log("Logged in")
      }
    }).catch(error => {
      console.error('Error:', error);
    })
  }

  return (
    <div>
        <div id="auth">
            <p id="store-name">Trinity</p>
            <p id="login">Login</p>
            <form onSubmit={handle_login}>
                <fieldset>
                <label htmlFor="username">Username:<input type="text" name="username" id="username" value = {username} onChange={(e)=> setUsername(e.target.value)} required/></label>
                <label htmlFor="password">Password:<input type="password" name="password" id-="password" value={password} onChange={(e)=>setPassword(e.target.value)}required/></label>
                </fieldset>
                <button type="submit">Log in</button>
            </form>
        </div>
    </div>
  );
}

export default Login;