import React from 'react';
import Footer from './Footer';
import PageHeader from './PageHeader';

function Hobbies() {
  const backgroundStyle = {
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
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
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M25 25c0-6.6-5.4-12-12-12s-12 5.4-12 12 5.4 12 12 12 12-5.4 12-12zm12 0c0-6.6-5.4-12-12-12s-12 5.4-12 12 5.4 12 12 12 12-5.4 12-12z'/%3E%3C/g%3E%3C/svg%3E")`,
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    padding: '25px',
    margin: '20px 0',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    color: '#632713',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const hobbies = [
    { name: 'Painting', description: 'Expressing creativity through colors and brushes', icon: '🎨' },
    { name: 'Reading', description: 'Diving into fictional worlds and expanding knowledge', icon: '📚' },
    { name: 'Photography', description: 'Capturing moments and telling stories through images', icon: '📸' },
    { name: 'Music', description: 'Listening to melodies and discovering new artists', icon: '🎵' },
    { name: 'Traveling', description: 'Exploring new places and cultures around the world', icon: '✈️' },
    { name: 'Cooking', description: 'Experimenting with recipes and culinary adventures', icon: '👨‍🍳' },
  ];

  return (
    <>
      <div style={backgroundStyle}>
        <div style={overlayStyle}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <PageHeader title="HOBBIES" color="#EC6426" />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <p style={{
              color: '#632713',
              fontSize: '1.3rem',
              textAlign: 'center',
              marginBottom: '40px',
              fontStyle: 'italic',
              fontWeight: 'bold'
            }}>
              Beyond coding: passions that fuel my creativity
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '25px'
            }}>
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  style={cardStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '15px'
                  }}>
                    {hobby.icon}
                  </div>
                  <h3 style={{
                    margin: '0 0 10px 0',
                    fontSize: '1.6rem',
                    color: '#EC6426',
                    fontWeight: 'bold'
                  }}>
                    {hobby.name}
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#632713'
                  }}>
                    {hobby.description}
                  </p>
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

export default Hobbies;
