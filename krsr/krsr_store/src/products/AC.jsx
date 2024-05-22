import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function AC() {
  const [products, setProducts] = useState([]);
  const fetching = async () => {
    const response = await axios.get("http://localhost:5000/call/product/8");
    setProducts(response.data.ACs);
  };

  useEffect(() => {
    fetching();
  },[]);
  console.log(products[0]);
  return (
    <div>
      <Navbar/>
      {products.map((product,index) => {
        return <Card name={product.item} description={product.description} price={product.price} quantity={product.stock}></Card>
      })}
      <Footer/>
    </div>
  );
}

export default AC;