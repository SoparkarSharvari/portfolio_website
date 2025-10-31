import React, { useEffect } from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import logo from '../PostmanAPIFundamentalsStudentExpert.png';

function Certificates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const textStyle ={
        color:'#632713',
        padding: '0.8%',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        fontFamily: 'Protest Strike, sans-serif',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center',
        textAlign: 'center'
    }
    const backgroundStyle ={
        backgroundColor:'#FDE3CF',
        height: '100%',
        width:'100%',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        minHeight: '100vh',
      }
      const certficatename={
        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
        textStyle:'bold',
        paddingLeft:'10px'
      }
      const handleButtonClick = (certificate) => {
        window.open(certificate, '_blank');
      };
      
  return (
    <>
    <div  style={backgroundStyle}>
      <PageHeader title="CERTIFICATES" margin="0 1vw 5vh" color="#EC6426" />
       <div>
            <p style={{fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', textAlign: 'center', color: '#632713'}}>
                I have taken various courses and earned several certificates across different fields.
                <br></br> These include comprehensive programs in programming languages, web development, data science, machine learning, cloud computing, and API management.
                <br></br> Each course has equipped me with specialized skills and knowledge, allowing me to broaden my expertise and stay current with industry trends.
            </p>
       </div><br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', padding: '10px' }}>
            <div style={{ backgroundColor: '#F8A91F',padding:'10px',display: 'flex', alignItems: 'center',width: 'clamp(70%, 80vw, 50%)', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: '#F8A91F',display: 'flex', alignItems: 'center', flex: 1 }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width: 'clamp(30px, 8vw, 50px)', height: 'clamp(30px, 8vw, 50px)' }} />
                    <p style={certficatename}>Postman API Fundamentals Student Expert</p>
                </div>
                <button style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#EC6426', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => handleButtonClick('Postman_certificate.png')}>View</button>
                </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', padding: '10px' }}>
            <div style={{ backgroundColor: '#F8A91F',padding:'10px',display: 'flex', alignItems: 'center',width: 'clamp(70%, 80vw, 50%)', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: '#F8A91F',display: 'flex', alignItems: 'center', flex: 1 }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width: 'clamp(30px, 8vw, 50px)', height: 'clamp(30px, 8vw, 50px)' }} />
                    <p style={certficatename}>Android Compose Camp</p>
                </div>
                <button style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#EC6426', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => handleButtonClick('Sharvari Soparkar Compose Camp Certificate.pdf')}>View</button>
                </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', padding: '10px' }}>
            <div style={{ backgroundColor: '#F8A91F',padding:'10px',display: 'flex', alignItems: 'center',width: 'clamp(70%, 80vw, 50%)', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: '#F8A91F',display: 'flex', alignItems: 'center', flex: 1 }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width: 'clamp(30px, 8vw, 50px)', height: 'clamp(30px, 8vw, 50px)' }} />
                    <p style={certficatename}>NVIDIA DLI Certificate</p>
                </div>
                <button style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#EC6426', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => handleButtonClick('NVIDIA_Certificate.pdf')}>View</button>
                </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', padding: '10px' }}>
            <div style={{ backgroundColor: '#F8A91F',padding:'10px',display: 'flex', alignItems: 'center',width: 'clamp(70%, 80vw, 50%)', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: '#F8A91F',display: 'flex', alignItems: 'center', flex: 1 }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width: 'clamp(30px, 8vw, 50px)', height: 'clamp(30px, 8vw, 50px)' }} />
                    <p style={certficatename}>Wittyhacks 4.0 Certificate</p>
                </div>
                <button style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#EC6426', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => handleButtonClick('Wittyhacks 4.0 Certificate- Sharvari Soparkar.pdf')}>View</button>
                </div>
            </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', padding: '10px' }}>
            <div style={{ backgroundColor: '#F8A91F',padding:'10px',display: 'flex', alignItems: 'center',width: 'clamp(70%, 80vw, 50%)', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ backgroundColor: '#F8A91F',display: 'flex', alignItems: 'center', flex: 1 }}>
                    <img src={logo} alt="icon" style={{ marginRight: '10px', width: 'clamp(30px, 8vw, 50px)', height: 'clamp(30px, 8vw, 50px)' }} />
                    <p style={certficatename}>Ideathon Certificate</p>
                </div>
                <button style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: '#EC6426', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => handleButtonClick('Ideathon - Certificate of Participation.pdf')}>View</button>
                </div>
            </div>
        </div>

        <Footer/>
  </>
  )
}

export default Certificates;
