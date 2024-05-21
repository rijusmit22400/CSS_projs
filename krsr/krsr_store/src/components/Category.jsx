import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

function Category({ image, text, link }) {
    return (
        <div>
            <div className="category">
                <img src={image} alt="category"></img>
                <Link to={link}><p id="title">{text}</p></Link>
            </div>
        </div>
    );
}

export default Category;