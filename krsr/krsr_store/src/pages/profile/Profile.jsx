import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import "./Profile.css";

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const details = new URLSearchParams(location.search);
    let username = details.get('username');
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
    useEffect(() => {
        if (token === null) {
            navigate("/auth_login");
        }
    }, [username, navigate]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="categories-heading">
                <p>Update your profile</p>
            </div>
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="full_name">Full Name</label>
                                <input type="text" name="full_name" id="full_name" placeholder="Enter your full name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" placeholder="Enter your username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <input type="email" name="contact" id="contact" placeholder="Enter your contact email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" id="address" placeholder="Enter your address" />
                            </div>
                            <div className="button-group">
                                <button className="btn save-button">Save Changes</button>
                                <button className="btn discard-button">Discard Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Profile;