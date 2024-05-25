import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

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