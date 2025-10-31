import React from 'react';
import Footer from './Footer';
import PageHeader from './PageHeader';
import logo from '../images/AICTE-Logo.webp';
import logo1 from '../images/codSoft.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// @ts-ignore
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function Experience() {
  const backgroundStyle ={
    backgroundColor:'#FDE3CF',
    height: '100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  const handleButtonClick = (certificate) => {
    window.open(certificate, '_blank');
  };

  const experiences = [
    {
      title: 'AWS Academy',
      description: 'Completed AWS Academy courses, gaining expertise in cloud computing, AWS services, and cloud architecture.',
      certificate: 'aws academy.pdf',
      logo: logo,
      duration: '2023',
      role: 'Student'
    },
    {
      title: 'Google Developer',
      description: 'Participated in Google Developer programs, learning Android development and modern web technologies.',
      certificate: 'google developer.pdf',
      logo: logo,
      duration: '2023',
      role: 'Developer'
    },
    {
      title: 'Zero Trust Cloud Security',
      description: 'Studied Zero Trust Cloud Security principles and implementations with Zscaler.',
      certificate: 'zscaler.pdf',
      logo: logo,
      duration: '2023',
      role: 'Security Enthusiast'
    },
    {
      title: 'CodSoft',
      description: 'Internship at CodSoft, working on various software development projects and gaining practical experience.',
      certificate: 'Sharvari Soparkar-2.pdf',
      logo: logo1,
      duration: '2023',
      role: 'Intern'
    },
    {
      title: 'Oasis InfoByte',
      description: 'Virtual internship at Oasis InfoByte, contributing to open-source projects and learning collaborative development.',
      certificate: 'Postman_certificate.png',
      logo: 'logo1.png',
      duration: '2023',
      role: 'Virtual Intern'
    },
  ];

  return (
    <>
      <div style={backgroundStyle}>
        <PageHeader title="Work Experience" margin="0 1vw 5vh" color="#EC6426" />
        <div>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', textAlign: 'center', color: '#632713', marginBottom: '30px' }}>
            I have gained valuable work experience in various roles and industries.
            <br /> These include positions in software development, project management, and technical support.
            <br /> My roles have allowed me to develop strong problem-solving skills, enhance my technical expertise, and work effectively in team environments.
          </p>
        </div>
        <Box sx={{ flexGrow: 1, paddingX: { xs: 2, sm: 4, md: 6 } }}>
          <Grid container spacing={3} justifyContent="center">
            {experiences.map((exp, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Item style={{ backgroundColor: '#F8A91F', color: '#632713' }}>
                  <img src={exp.logo} alt={`${exp.title} logo`} style={{ width: '60px', height: '60px', marginBottom: '15px' }} />
                  <h3 style={{ color: '#EC6426', margin: '10px 0' }}>{exp.title}</h3>
                  <p style={{ fontSize: '14px', margin: '5px 0', fontWeight: 'bold' }}>{exp.role} | {exp.duration}</p>
                  <p style={{ fontSize: '14px', margin: '10px 0' }}>{exp.description}</p>
                  <button
                    onClick={() => handleButtonClick(exp.certificate)}
                    style={{
                      backgroundColor: '#EC6426',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginTop: '10px'
                    }}
                  >
                    View Certificate
                  </button>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default Experience;
