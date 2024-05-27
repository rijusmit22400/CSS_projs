import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useParams } from "react-router-dom"
import LandingPage from "./Landing";

function App() {
  let details = useParams();
  if(details.username === null || details.username === undefined){
    username = "guest";
  }
  if(details.key === null || details.key === undefined){
    key = "no-key";
  }
  console.log(username);
  console.log(key);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home username={username} key={key} />} />
        <Route path="/about" element={<About username={username} key={key} />} />
        <Route path="/profile" element={<Profile username={username} key={key} />} />
        <Route path="/cart" element={<Cart username={username} key={key} />} />
        <Route path="/product/:id" element={<Products username={username} key={key} />} />
        <Route path="/auth_login" element={<Login/>} />
        <Route path="/auth_register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
