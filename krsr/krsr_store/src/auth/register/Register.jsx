import React from "react";
import "./Register.css";
import { useState } from "react";

function Register() {
  const [full_name, setFull_name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");


  const handle_registration = (event) => {
    event.preventDefault();
    alert("Registering");
    const payload = {
      full_name: full_name,
      username: username,
      password: password,
      contact: contact,
      address: address,
      email: email
    }
    fetch("/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then(Response=>{
      if(Response.ok){
        window.location.href = "/auth_login"
      }
    }).catch(error => {
      console.error('Error:', error);
    })
  };
  return (
    <div>
        <div id="auth">
            <p id="store-name">Trinity</p>
            <p id="login">Login</p>
            <form onSubmit={handle_registration}>
                <fieldset>
                <label htmlFor="full_name">Full Name:<input type="text" name="full_name" value={full_name} onChange={(e)=>{setFull_name(e.target.value)}} required/></label>
                <label htmlFor="username">Username:<input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} required/></label>
                <label htmlFor="password">Password:<input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/></label>
                <label htmlFor="contact">Contact:<input type="text" name="contact" value={contact} onChange={(e)=>{setContact(e.target.value)}} required/></label>
                <label htmlFor="address">Address:<input type="text" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} required/></label>
                <label htmlFor="email">Email:<input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/></label>
                </fieldset>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  );
}

export default Register;