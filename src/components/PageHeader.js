import React from 'react';
import BackButton from './BackButton';

const PageHeader = ({ title, margin = '0 5vw 10vh', color = 'black' }) => {
  const textStyle = {
    color: color,
    padding: '0.8%',
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontFamily: 'Protest Strike, sans-serif',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '20px'
  };

  return (
    <div style={{ margin, position: 'relative' }}>
      <div style={{
        display: 'flex',
        padding: '5px',
        width: 'clamp(80%, 90vw, 100%)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <BackButton />
        <h1 style={textStyle}>{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
