import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/admin'); 
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to the Inventory Management System</h1>
      <button onClick={handleButtonClick} className="admin-button">
        Go to Admin Panel
      </button>
    </div>
  );
};

export default WelcomePage;
