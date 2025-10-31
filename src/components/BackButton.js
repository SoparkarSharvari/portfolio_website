import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Button 
      variant="outlined" 
      style={{ paddingInline: '0px',marginTop: '10px' }} 
      onClick={handleClick} // Add onClick handler
    >
      HOME
    </Button>
  );
}
