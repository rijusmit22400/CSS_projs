import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from "react";
function Cart() {
    const navigate = useNavigate();
    const location = useLocation();
    const details =  new URLSearchParams(location.search);
    let username = details.get('username');
    let key = details.get('key');
    useEffect(() => {
        if (username === "guest") {
            navigate("/auth_login");
        }
    },[username, navigate]);
    return (
        <div>
        <Navbar></Navbar>
        <div className ="categories-heading">
        <p>View your cart</p>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default Cart;