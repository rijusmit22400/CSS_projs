import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react";
function Cart() {
    const navigate = useNavigate();
    let username = useParams();

    useEffect(() => {
        if (username.username === null || username.username === undefined) {
            navigate("/auth_login");
        }
    },[username.username, navigate]);
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