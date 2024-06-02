import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, useLocation } from 'react-router-dom';
import "./Cart.css";

function Cart() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

    const navigate = useNavigate();
    const location = useLocation();
    const details = new URLSearchParams(location.search);
    let username = details.get('username');

    const get_items = () => {
        fetch('http://localhost:5000/show_cart/' + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setItems(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const get_details = () => {
        fetch('http://localhost:5000/show_details/' + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setItems(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        if (token === null) {
            navigate("/auth_login");
        } else {
            get_items();
        }
    }, [token, username, navigate]);

    useEffect(() => {
        const total = calculate_total();
        setTotal(total);
    }, [items]);

    const calculate_total = () => {
        let total = 0;
        for (let x of items) {
            total += x.price * x.quantity;
        }
        return total;
    }

    return (
        <div>
            <Navbar />
            <div className="categories-heading">
                <p>View your cart</p>
            </div>
            <div id="cart-container">
                <div id="items" className="box-in-cart-page">
                    {items.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="item-image">
                                <img src={"https://cdn11.bigcommerce.com/s-jjm7kgkrrc/images/stencil/1280x1280/products/82569/6197802/product_placeholder__65638.1673413880.jpg?c=1"} alt="item" />
                            </div>
                            <div className="item-details">
                                <p>{item.name}</p>
                                <p>Price: {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="summary" className="box-in-cart-page">
                    <p>Total: {total}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
