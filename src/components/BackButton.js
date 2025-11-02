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
      variant="contained"
      sx={{
        backgroundColor: '#F8A91F',
        color: '#000',
        border: '2px solid #000000ff',
        paddingInline: '16px',
        marginTop: '10px',
        '&:hover': {
          backgroundColor: '#EC6426',
          borderColor: '#EC6426',
        },
      }}
      onClick={handleClick}
    >
      HOME
    </Button>
);
}