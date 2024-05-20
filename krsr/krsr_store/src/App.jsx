import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Robots from "./products/Robots";
import Laptops from "./products/Laptops";
import Mobiles from "./products/Phones";
import Microphones from "./products/Microphones";
import Cameras from "./products/Cameras";
import Headphones from "./products/Headphones";
import Speakers from "./products/Speakers";
import TV from "./products/TV";
import AC from "./products/AC";
import Accessories from "./products/Accessories";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/robots" element={<Robots />} />
        <Route path="/microphones" element={<Microphones />} />
        <Route path="/cameras" element={<Cameras />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/ac" element={<AC />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;