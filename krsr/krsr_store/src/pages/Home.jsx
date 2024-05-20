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
      <div>
      <Category link="/robots" image="https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr.jpg" text="Robots"></Category>
      <Category link="/robots" image="https://petapixel.com/assets/uploads/2022/09/canon-5d-mark-iv-dslr.jpg" text="Robots"></Category>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;