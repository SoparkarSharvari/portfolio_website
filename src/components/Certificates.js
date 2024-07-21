import React from 'react'
import BackButton from './BackButton'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Footer from './Footer'
import logo from '../PostmanAPIFundamentalsStudentExpert.png'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
function Certificates() {

        const textStyle ={
        color:'black',
        padding: '0.9%',
        fontSize:'2rem',
        fontFamily: 'Protest Strike, sans-serif',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center'
    }
    const backgroundStyle ={
        backgroundColor:'#aed6f1',
        height: '100%',
        width:'100%',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        minHeight: '100vh', 
      }
      const certficatename={
        fontSize:'20px',
        textStyle:'bold',
        paddingLeft:'10px'
      }
      const comname={
        fontSize:'15px'
      }
      const handleButtonClick = (certificate) => {
        window.open(certificate, '_blank');
      };
      
  return (
    <>
    <div  style={backgroundStyle}>
      <div style={{ display: 'flex', padding: '5px', width:'57%',justifyContent: 'space-between', alignItems: 'center' }}>
       <BackButton/>   
       <h1 style={textStyle}>CERTIFICATES</h1>
        </div>
       <div>
            <p style={{fontSize:'20px'}}>
                I have taken various courses and earned several certificates across different fields.
                <br></br> These include comprehensive programs in programming languages, web development, data science, machine learning, cloud computing, and API management.
                <br></br> Each course has equipped me with specialized skills and knowledge, allowing me to broaden my expertise and stay current with industry trends.
            </p>
       </div><br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'50%', justifyContent: 'space-between' }}>
                <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'100%' }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width:'50px',height:'50px' }} />
                    <p style={certficatename}>Postman API Fundamentals Student Expert</p>
                </div>
                <button style={{ marginLeft: '10px' }} onClick={() => handleButtonClick('Postman_certificate.png')}>View</button>
                </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'50%', justifyContent: 'space-between' }}>
                <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'100%' }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width:'50px',height:'50px' }} />
                    <p style={certficatename}>Android Compose Camp</p>
                </div>
                <button style={{ marginLeft: '10px' }} onClick={() => handleButtonClick('Sharvari Soparkar Compose Camp Certificate.pdf')}>View</button>
                </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'50%', justifyContent: 'space-between' }}>
                <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'100%' }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width:'50px',height:'50px' }} />
                    <p style={certficatename}>NVIDIA DLI Certificate</p>
                </div>
                <button style={{ marginLeft: '10px' }} onClick={() => handleButtonClick('NVIDIA_Certificate.pdf')}>View</button>
                </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'50%', justifyContent: 'space-between' }}>
                <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'100%' }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width:'50px',height:'50px' }} />
                    <p style={certficatename}>Wittyhacks 4.0 Certificate</p>
                </div>
                <button style={{ marginLeft: '10px' }} onClick={() => handleButtonClick('Wittyhacks 4.0 Certificate- Sharvari Soparkar.pdf')}>View</button>
                </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
            <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'50%', justifyContent: 'space-between' }}>
                <div style={{ backgroundColor: 'white',paddingLeft:'10px',paddingRight:'10px',display: 'flex', alignItems: 'center',width:'100%' }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width:'50px',height:'50px' }} />
                    <p style={certficatename}>Ideathon Certificate</p>
                </div>
                <button style={{ marginLeft: '10px' }} onClick={() => handleButtonClick('Ideathon - Certificate of Participation.pdf')}>View</button>
                </div>
            </div>
        </div>
       
        <Footer/>
  </>
  )
}

export default Certificates
