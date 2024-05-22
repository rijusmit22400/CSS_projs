import React from "react";
import "./Card.css";

function Card({name, description, price, quantity}) {
    return (
        <div className="container">
            <p id="name">{name}</p>
            <p id="description">{description}</p>
            <p id="price">{price}</p>
            <p id="quantity">{quantity}</p>
        </div>
    )
}

export default Card;