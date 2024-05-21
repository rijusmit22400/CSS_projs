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
        <Route path="/home" element={<Home username="username" password="password" />} />
        <Route path="/about" element={<About username="username" password="password" />} />
        <Route path="/profile" element={<Profile username="username" password="password" />} />
        <Route path="/cart" element={<Cart username="username" password="password" />} />
        <Route path="/laptops" element={<Laptops username="username" password="password" />} />
        <Route path="/mobiles" element={<Mobiles username="username" password="password" />} />
        <Route path="/robots" element={<Robots username="username" password="password" />} />
        <Route path="/microphones" element={<Microphones username="username" password="password" />} />
        <Route path="/cameras" element={<Cameras username="username" password="password" />} />
        <Route path="/headphones" element={<Headphones username="username" password="password" />} />
        <Route path="/speakers" element={<Speakers username="username" password="password" />} />
        <Route path="/tv" element={<TV username="username" password="password" />} />
        <Route path="/ac" element={<AC username="username" password="password" />} />
        <Route path="/accessories" element={<Accessories username="username" password="password" />} />
        <Route path="/auth_login" element={<Login username="username" password="password" />} />
        <Route path="/auth_register" element={<Register username="username" password="password" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;