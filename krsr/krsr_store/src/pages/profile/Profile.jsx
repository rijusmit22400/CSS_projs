import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from "react";
import "./Profile.css";

import cart from "../../assets/cart.svg";

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const details =  new URLSearchParams(location.search);
    let username = details.get('username');
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
    useEffect(() => {
        if (token === null) {
            navigate("/auth_login");
        }
    },[username, navigate]);
    return (
        <div>
            <Navbar></Navbar>
            <div className="categories-heading">
                <p>Update your profile</p>
            </div>
            <div id="profile-container">
                <div id="profile-box">
                    <form>
                        <label htmlFor="full_name">
                            Full Name:
                            <input type="text" name="full_name" id="full_name" value="" />
                        </label>
                        <label htmlFor="username">
                            Username:
                            <input type="text" name="username" id="username" value="" />
                        </label>
                        <label htmlFor="password">
                            Password:
                            <input type="password" name="password" id="password" value="" />
                        </label>
                        <label htmlFor="email">
                            Email:
                            <input type="email" name="email" id="email" value="" />
                        </label>
                        <label htmlFor="contact">
                            Contact:
                            <input type="text" name="contact" id="contact" value="" />
                        </label>
                        <label htmlFor="address">
                            Address:
                            <input type="text" name="address" id="address" value="" />
                        </label>
                    </form>
                    <label>
                    <button>Save</button>
                    </label>
                    <label>
                    <button>Discard</button>
                    </label>
                </div>
                <div id="dividing-line"></div>
                <div id="profile-logo"><img src={cart} alt="logo"/></div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Profile;