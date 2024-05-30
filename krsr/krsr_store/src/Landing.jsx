import React from 'react';
import { Navigate } from 'react-router-dom';

function LandingPage() {
  let name = "guest";
  let key = "no-key";
  name = localStorage.getItem("user") ? localStorage.getItem("user") : "guest";
  key = localStorage.getItem("key") ? localStorage.getItem("key") : "no-key";
  console.log(name);
  console.log(key);

  return <>
  <Navigate to={`/home?username=${name}&key=${key}`}></Navigate>
  </>;
}

export default LandingPage;