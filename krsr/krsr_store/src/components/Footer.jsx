import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-body">
                <div className="footer-content">
                    <p id="footer-heading">KRSR Store</p>
                    <p>KRSR Store is a website that sells Electronics for all types of tasks. This is was out project for the course of Database Management System.</p>
                    <p>This is an electronics store A project for DBMS course IIITD</p>
                </div>
                <div className="gap-between-content-and-bottom">
                </div>
                <div className="footer-bottom">
                    <p>&copy; KRSR Store | Designed by Rijusmit Biswas contibutions to Ideas and Concept and prototypes by  Ketan Garg, Saksham Saini, Rohan Beriwal</p>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;