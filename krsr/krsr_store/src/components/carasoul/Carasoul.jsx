import React from "react";
import "./Carasoul.css";


function Hero() {
    return (
        <div>
            <section className="hero-container">
                <div className="slider-wrapper">
                    <div id="slide-1" className="carasoul"></div>
                    <div id="slide-2" className="carasoul"></div>
                    <div id="slide-3" className="carasoul"></div>
                    <div id="slide-4" className="carasoul"></div>
                    <div id="slide-5" className="carasoul"></div>
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