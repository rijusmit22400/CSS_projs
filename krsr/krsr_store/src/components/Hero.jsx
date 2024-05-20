import React from "react";
import image1 from "../assets/Camera/360_Camera.jpeg";
import image2 from "../assets/Camera/Instant_Camera.jpeg";
import image3 from "../assets/Camera/Mirrorless_Camera.jpg";
import image4 from "../assets/Camera/Drone_Camera.jpg";
import image5 from "../assets/Camera/Webcam.jpeg";
import "./Hero.css";


function Hero() {
    return (
        <div>
            <section className="container">
                <div className="slider-wrapper">
                    <img id="slide-1" src={image1} alt="360 Camera"></img>
                    <img id="slide-2" src={image2} alt="Instant_Camera"></img>
                    <img id="slide-3" src={image3} alt="Mirrorless_Camera"></img>
                    <img id="slide-4" src={image4} alt="Drone_Camera"></img>
                    <img id="slide-5" src={image5} alt="Webcam"></img>
                </div>
                <div className="slider-nav">
                    <a href="slide-1"></a>
                    <a href="slide-2"></a>
                    <a href="slide-3"></a>
                    <a href="slide-4"></a>
                    <a href="slide-5"></a>
                </div>
            </section>
        </div>
    );
}

export default Hero;