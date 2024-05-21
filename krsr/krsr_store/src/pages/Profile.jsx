import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
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