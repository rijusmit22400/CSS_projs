import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return null; // Or you can return some loading spinner or any UI if you want.
}

export default LandingPage;
