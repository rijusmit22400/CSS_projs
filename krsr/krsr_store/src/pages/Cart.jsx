import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
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