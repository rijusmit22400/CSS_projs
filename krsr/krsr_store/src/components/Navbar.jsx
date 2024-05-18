import React from "react";
import "./Navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
function Navbar() {
    return <div>
        <nav>
            <ul>
                <span><li><a href="/">Home</a></li></span>
                <span><li><a href="/about">About</a></li></span>
                <span><li><a href="/profile"><i class="bi bi-person-circle"></i></a></li></span>
                <span><li><a href="/cart"><i class="bi bi-cart"></i></a></li></span>
            </ul>
        </nav>
    </div>
}


export default Navbar;