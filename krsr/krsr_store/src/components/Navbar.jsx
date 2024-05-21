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
                    <li><Link to="/home?username=username&password=password">Home</Link></li>
                    <li><Link to="/about?username=username&password=password">About</Link></li>
                    <li><Link to="/profile?username=username&password=password"><i className="bi bi-person-circle"></i></Link></li>
                    <li><Link to="/cart?username=username&password=password"><i className="bi bi-cart"></i></Link></li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;