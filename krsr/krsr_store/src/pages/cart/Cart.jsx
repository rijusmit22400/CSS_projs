import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from "react";
function Cart() {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
    useEffect(() => {
        if (token === null) {
            navigate("/auth_login");
        }
    },[]);

    const navigate = useNavigate();
    const location = useLocation();
    const details =  new URLSearchParams(location.search);
    let username = details.get('username');
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