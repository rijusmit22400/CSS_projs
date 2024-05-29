import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  let name = "guest";
  let key = "no-key";
  name = localStorage.getItem("user") ? localStorage.getItem("user") : "guest";
  key = localStorage.getItem("key") ? localStorage.getItem("key") : "no-key";
  console.log(name);
  console.log(key);
  useEffect(() => {
    navigate(`/home?name=${encodeURIComponent(name)}&key=${encodeURIComponent(key)}`);
  }, []); // Run this effect after the component mounts

  return <></>; // Or you can return some loading spinner or any UI if you want.
}

export default LandingPage;