import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react";

function Profile() {
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
        <p>Update your profile</p>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default Profile;