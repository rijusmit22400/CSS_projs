import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
function Navbar() {
    return (
        <div>
            <nav>
                <div className="name">
                    <p>Trinity Online Electronics Store</p>
                </div>   
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/profile"><i className="bi bi-person-circle"></i></Link></li>
                    <li><Link to="/cart"><i className="bi bi-cart"></i></Link></li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;