import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function BackButton() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate('/'); // Navigate to the home route
  };

  return (
    <Button 
      variant="outlined" 
      style={{ paddingInline: '0px' }} 
      onClick={handleClick} // Add onClick handler
    >
      HOME
    </Button>
  );
}
