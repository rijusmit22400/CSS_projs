import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home?username=guest&password=no-password');
  }, [navigate]);

  return <>
  
  </>; // Or you can return some loading spinner or any UI if you want.
}

export default LandingPage;
