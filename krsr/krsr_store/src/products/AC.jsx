import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AC() {
  return (
    <div>
      <Navbar/>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
      <Footer/>
    </div>
  );
}

export default AC;