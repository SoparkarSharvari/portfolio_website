import React from 'react';
import Footer from './Footer';
import BackButton from './BackButton';
import logo from '../images/AICTE-Logo.webp'
import logo1 from '../images/codSoft.png'
function Experience() {
  const backgroundStyle ={
    backgroundColor:'#aed6f1',
    height: '100%',
    width:'100%',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    minHeight: '100vh',
  };

  const textStyle = {
    color: 'black',
    padding: '0.9%',
    fontSize: '2rem',
    fontFamily: 'Protest Strike, sans-serif',
    textAlign: 'center',
  };

  const companyStyle = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    width: '20%',
    margin: '5px',
  };

  const companyTextStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const handleButtonClick = (certificate) => {
    window.open(certificate, '_blank');
  };

  const companies = [
    { name: 'AWS Academy', certificate: 'aws academy.pdf', logo: logo },
    { name: 'Google Developer', certificate: 'google developer.pdf', logo: logo },
    { name: 'Zero Trust Cloud Security', certificate: 'zscaler.pdf', logo: logo },
    { name: 'CodSoft', certificate: 'Sharvari Soparkar-2.pdf', logo: logo1 },
    { name: 'Oasis InfoByte', certificate: 'Postman_certificate.png', logo: 'logo1.png' },
  ];

  return (
    <>
      <div style={backgroundStyle}>
        <div style={{ display: 'flex', padding: '5px', width: '57%', justifyContent: 'space-between', alignItems: 'center' }}>
          <BackButton />
          <h1 style={textStyle}>Work Experience</h1>
        </div>
        <div>
          <p style={{ fontSize: '20px' }}>
            I have gained valuable work experience in various roles and industries.
            <br /> These include positions in software development, project management, and technical support.
            <br /> My roles have allowed me to develop strong problem-solving skills, enhance my technical expertise, and work effectively in team environments.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {companies.map((company) => (
            <div style={companyStyle} key={company.name}>
              <img src={company.logo} alt={`${company.name} logo`} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
              <p style={companyTextStyle}>{company.name}</p>
              <button onClick={() => handleButtonClick(company.certificate)}>View</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Experience;
