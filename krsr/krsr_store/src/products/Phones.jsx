import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";


function Phones() {
  const [products, setProducts] = useState([]);
  const fetching = async () => {
    const response = await axios.get("http://localhost:5000/call/product/4");
    setProducts(response.data.Mobiles);
  };

  useEffect(() => {
    fetching();
  },[]);
  console.log(products[0]);
  return (
    <div>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default Phones;