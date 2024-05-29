import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function Delivery() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    let username = params.get('name');
    let key = params.get('key');
    if(username === null || username !== localStorage.getItem("user")){
        username = "guest";
    }
    
    if(key === null || key !== localStorage.getItem("password")){
        key = "no-key";
    }
    return (
        <div>
        <Navbar></Navbar>
        <div className ="categories-heading">
        <p>About Project and The Team</p>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default Delivery;