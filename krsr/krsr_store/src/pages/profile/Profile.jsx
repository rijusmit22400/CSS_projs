import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from "react";
import "./Profile.css";

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const details =  new URLSearchParams(location.search);
    let username = details.get('username');
    let key = details.get('key');
    useEffect(() => {
        if (username === "guest") {
            navigate("/auth_login");
        }
    },[username, navigate]);
    return (
        <div>
        <Navbar></Navbar>
        <div className ="categories-heading">
        <p>Update your profile</p>
        <div id="profile-box">
            <div id="form-profile">
            <form method="POST" action="/change_profile">
                <fieldset>
                    <label>Full Name: <input type="text"/></label>
                    <label>Username: <input type="text"/></label>
                    <label>Password: <input type="password"/></label>
                    <label>Confirm Password: <input type="password"/></label>
                    <label>Contact: <input type="text"/></label>
                    <label>Address: <input type="text"/></label>
                    <label><button>Save</button></label>
                    <label><button>Discard</button></label>
                </fieldset>
            </form>
            </div>
        </div>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default Profile;