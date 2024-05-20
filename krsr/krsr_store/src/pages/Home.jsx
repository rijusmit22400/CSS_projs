import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import "./Home.css";
import Category from "../components/Category";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div id="categories-heading">
        <p>Browse Other Categories</p>
      </div>
      <div id="categoties-container">
        <Category link="/robots" image="https://photos5.appleinsider.com/gallery/59195-120810-Apple-Robot-AI-xl.jpg" text="Robots"></Category>
        <Category link="/cameras" image="https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr.jpg" text="Camera"></Category>
        <Category link="/mobiles" image="https://www.lg.com/levant_en/images/mobile-phones/MD05856575/gallery/G6-medium01-n.jpg" text="Robots"></Category>
        <Category link="/microphones" image="https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr.jpg" text="Camera"></Category>
        <Category link="/tv" image="https://photos5.appleinsider.com/gallery/59195-120810-Apple-Robot-AI-xl.jpg" text="Robots"></Category>
        <Category link="/ac" image="https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr.jpg" text="Camera"></Category>
        <Category link="/laptops" image="https://photos5.appleinsider.com/gallery/59195-120810-Apple-Robot-AI-xl.jpg" text="Robots"></Category>
        <Category link="/speakers" image="https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr.jpg" text="Camera"></Category>
        <Category link="/accessories" image="https://photos5.appleinsider.com/gallery/59195-120810-Apple-Robot-AI-xl.jpg" text="Robots"></Category>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;