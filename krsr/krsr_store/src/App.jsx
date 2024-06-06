import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import Products from "./pages/products/Products";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import LandingPage from "./Landing";
import { useEffect } from "react";
import Delivery from "./pages/delivery/Delivery";

function App() {
  let name = localStorage.getItem("user");
  let key = localStorage.getItem("key");
  const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
    useEffect(() => {
        if (token === null) {
          name = null;
          key = null; 
        }
    });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home username={name} key={key} />} />
        <Route path="/about" element={<About username={name} key={key} />} />
        <Route path="/profile" element={<Profile username={name} key={key} />} />
        <Route path="/cart" element={<Cart username={name} key={key} />} />
        <Route path="/delivery" element={<Delivery username={name} key={key}/>}/>
        <Route path="/product/:id" element={<Products username={name} key={key} />} />
        <Route path="/auth_login" element={<Login/>} />
        <Route path="/auth_register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
