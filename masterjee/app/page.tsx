"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter(); 
  const goToDashBoard = () => {1
    router.push('/Dashboard');
  };


  return (
    <div>
      <p>Redirecting to home...</p>
      <div>
        <h1>Welcome to MasterJee.com</h1>
        <button onClick={(e)=>{goToDashBoard()}}>Go to Dashboard</button>
      </div>
    </div>
  );
};

export default LandingPage;
