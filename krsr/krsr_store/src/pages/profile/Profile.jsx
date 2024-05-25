import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

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