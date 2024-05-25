import React from "react";
import "./Card.css";

function Card({name, description, price, quantity}) {
    return (
        <>
        <div className="container-products">
            <div>
            <img className="im_card" src="https://images.pond5.com/robot-user-profile-icon-avatar-illustration-169920823_iconl.jpeg"/>
            </div>
            <div>
            <p id="name">{name}</p>
            <p id="description">{description}</p>
            <p id="price">&#8377; {price}</p>
            <div><button id="add-to-cart">Add to Cart</button></div>
            </div>
        </div>
        </>
    )
}

export default Card;