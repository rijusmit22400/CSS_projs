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
      <Category link="/robots" image="" text="Robots"></Category>
      <Category link="/robots" image="" text="Robots"></Category>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;