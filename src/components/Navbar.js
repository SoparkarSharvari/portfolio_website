
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isFixed }) {
  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        position: isFixed ? 'fixed' : 'relative',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
     
      <a href="/myprojects" style={{ color: 'white',background:'pink', textDecoration: 'none', padding: '0 10px' }}>
        <p style={{ margin: 0 }}>Projects</p>
      </a>
      <a href="/certificates" style={{ color: 'white',background:'pink', textDecoration: 'none', padding: '0 10px' }}>
        <p style={{ margin: 0 }}>Certificates</p>
      </a>
      <a href="/experience" style={{ color: 'white',background:'pink', textDecoration: 'none', padding: '0 10px' }}>
        <p style={{ margin: 0 }}>Experience</p>
      </a>
      <a href="#utilities" style={{ color: 'white',background:'pink', textDecoration: 'none', padding: '0 10px' }}>
        <p style={{ margin: 0 }}>Utilities</p>
      </a>

      <a href="#hobbies" style={{ color: 'white',background:'pink', textDecoration: 'none', padding: '0 10px' }}>
        <p style={{ margin: 0 }}>Hobbies</p>
      </a>
    </div>
  );
}

export default Navbar;
