import React from 'react';
import Footer from './Footer';
import PageHeader from './PageHeader';

function Utilities() {
  const backgroundStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    padding: '20px',
    margin: '20px 0',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    color: 'white',
    textAlign: 'center',
  };

  const utilities = [
    { name: 'Code Formatter', description: 'Format your code for better readability' },
    { name: 'Color Picker', description: 'Pick and generate color palettes' },
    { name: 'Image Compressor', description: 'Compress images without losing quality' },
    { name: 'Password Generator', description: 'Generate strong, secure passwords' },
    { name: 'URL Shortener', description: 'Shorten long URLs for easy sharing' },
    { name: 'QR Code Generator', description: 'Create QR codes for various purposes' },
  ];

  return (
    <>
      <div style={backgroundStyle}>
        <div style={overlayStyle}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <PageHeader title="UTILITIES" color="#F8A91F" />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <p style={{
              color: '#FFFFFF',
              fontSize: '1.2rem',
              textAlign: 'center',
              marginBottom: '40px',
              fontStyle: 'italic'
            }}>
              Handy tools to make your development life easier
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {utilities.map((util, index) => (
                <div key={index} style={cardStyle}>
                  <h3 style={{
                    margin: '0 0 10px 0',
                    fontSize: '1.5rem',
                    color: '#F8A91F'
                  }}>
                    {util.name}
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {util.description}
                  </p>
                  <button style={{
                    marginTop: '15px',
                    padding: '10px 20px',
                    background: '#EC6426',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => e.target.style.background = '#F8A91F'}
                  onMouseOut={(e) => e.target.style.background = '#EC6426'}
                  >
                    Use Tool
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Utilities;
