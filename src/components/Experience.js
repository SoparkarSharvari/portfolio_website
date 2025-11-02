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
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(10px)',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: '#632713',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
  },
}));

function Experience() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const backgroundStyle ={
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    height: '100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
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
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1
        }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
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
                  <Item>
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
      </div>
      <Footer />
    </>
  )
}

export default Experience;
