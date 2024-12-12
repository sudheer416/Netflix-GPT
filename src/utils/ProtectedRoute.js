import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');


  useEffect(() => {
    // If there's no token, navigate to the login page
    if (!token) {
      navigate('/login');
    }
  }, [navigate, token]);

  // If the user is authenticated (i.e., token exists), render the children (protected content)
  if (!token) {
    return null; // Wait until navigation happens, don't render anything
  }

  return children;
};

export default ProtectedRoute;
