import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Robots from "./pages/Robots";
import Laptops from "./pages/Laptops";
import Mobiles from "./pages/Phones";
import Microphones from "./pages/Microphones";
import Cameras from "./pages/Cameras";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import TV from "./pages/TV";
import AC from "./pages/AC";
import Accessories from "./pages/Accessories";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;