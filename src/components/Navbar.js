
import React from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar({ isFixed }) {
  return (
    <Box
      sx={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        position: isFixed ? 'fixed' : 'relative',
        top: 0,
        width: '100%',
        zIndex: 1000,
        flexWrap: 'wrap',
      }}
    >
      <Button
        component={Link}
        to="/myprojects"
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'white',
          borderRadius: '20px',
          padding: '8px 16px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: '#ff69b4',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        Projects
      </Button>
      <Button
        component={Link}
        to="/certificates"
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'white',
          borderRadius: '20px',
          padding: '8px 16px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: '#ff69b4',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        Certificates
      </Button>
      <Button
        component={Link}
        to="/experience"
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'white',
          borderRadius: '20px',
          padding: '8px 16px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: '#ff69b4',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        Experience
      </Button>
      <Button
        href="#utilities"
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'white',
          borderRadius: '20px',
          padding: '8px 16px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: '#ff69b4',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        Utilities
      </Button>
      <Button
        href="#hobbies"
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'white',
          borderRadius: '20px',
          padding: '8px 16px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: '#ff69b4',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        Hobbies
      </Button>
    </Box>
  );
}

export default Navbar;
