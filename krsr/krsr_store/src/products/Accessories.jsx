import React from "react";
import { Link } from "react-router-dom";

function Accessories() {
  return (
    <div>
      <h1>Accessories</h1>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Accessories;