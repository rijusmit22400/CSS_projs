import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import cart from "../../assets/cart.svg";


function Navbar() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    let username = params.get('username');
    let key = params.get('key');
    let stored_username = localStorage.getItem("user");
    let stored_key = localStorage.getItem("key");
    if(username === null || username !== stored_username){
        username = "guest";
    }
    if(key === null || key !== stored_key){
        key = "no-key";
    }
    console.log(username);
    console.log(key);
    return (
        <div>
            <nav>
            <Link to={`/home?username=${username}&key=${key}`}>
                <div className="logo-navbar">
                <img src={cart} alt="logo"/>
                </div></Link>
                <div className="name">
                <Link to={`/home?username=${username}&key=${key}`}><p>Trinity Online Electronics Store</p></Link>
                </div>
                <ul>
                    <li><Link to={`/home?username=${username}&key=${key}`}>Home</Link></li>
                    <li><Link to={`/about?username=${username}&key=${key}`}>About</Link></li>
                    <li><Link to={`/profile?username=${username}&key=${key}`}><i className="bi bi-person-circle"></i></Link></li>
                    <li><Link to={`/cart?username=${username}&key=${key}`}><i className="bi bi-cart"></i></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
