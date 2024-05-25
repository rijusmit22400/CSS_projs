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
  let username = useParams();
  let password = useParams();
  console.log(username);
  console.log(password);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home username={username} password={password} />} />
        <Route path="/about" element={<About username={username} password={password} />} />
        <Route path="/profile" element={<Profile username={username} password={password} />} />
        <Route path="/cart" element={<Cart username={username} password={password} />} />
        <Route path="/product/:id" element={<Products username={username} password={password} />} />
        <Route path="/auth_login" element={<Login/>} />
        <Route path="/auth_register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
