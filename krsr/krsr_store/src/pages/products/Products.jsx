import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/card/Card";
import { useParams } from "react-router-dom";
import "./Products.css";


function Products() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const fetching = async () => {
    const response = await axios.get("http://localhost:5000/call/product/"+id);
    setProducts(response.data.items);
    setCategory(response.data.name);
  };

  useEffect(() => {
    fetching();
  },[]);
  console.log(products[0]);
  return (
    <div>
      <Navbar/>
      <div id="heading">
        <p>{category}</p>
      </div>
      {products.map((product,index) => {
        return <Card name={product.item} description={product.description} price={product.price} quantity={product.stock}></Card>
      })}<Footer/>
    </div>
  );
}

export default Products;