import React ,{ useState, useEffect } from 'react'
import loading from '../loadingPng.gif'
import { animated } from 'react-spring';
import { useSpring } from 'react-spring';
import Footer from './Footer';
import Myskills from './Myskills';
import AboutMe from './AboutMe';
import MyProjects from './projects/MyProjects';
import  '../style/Aboutme.css';
import '../style/Myskills.css';
import '../images/letter-c.png'
import '../images/python.png'
import '../images/java-script.png'
import '../images/java.png'
import '../images/node-js.png'
import '../images/sql-server.png'
import '../images/klipartz.com.png'
import '../images/logo192.png'
import { Maximize } from '@mui/icons-material';


const LandingPage = () => {

  const gradientStyle = {
    background: 'linear-gradient(to bottom, rgba(40, 60, 99, 1), rgba(255, 255, 255, 0))',
    // backgroundSize: '',
    height: '100%',
    width: '100%',
    fontFamily: 'Protest Strike, sans-serif',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    
  };

    const headerAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1600,
        config: { duration: 2000 },
      });
    
      const buttonAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1500, // Delay the button animation
        config: { duration: 1000 }, // Adjust the duration as needed
      });
    
    const [showLanding, setShowLanding] = useState(true);

    const landingStyle={
        background: `url(${loading}) no-repeat center center fixed` ,
        backgroundSize: '20%',
        height: '500vh',
        display: showLanding ? 'block' : 'none',
    };
  
    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowLanding(false);
        }, 1500); // 6 seconds
    
        return () => clearTimeout(timeout);
      }, []);
      const alternativeStyle = {
        // Add styles for the alternative content here
        display: showLanding ? 'none' : 'block',
        height:'100vh',
        width: '100%',
      };
      const [aboutMeRef, setAboutMeRef] = useState(null);

      const scrollToAboutMe = () => {
        if (aboutMeRef) {
          aboutMeRef.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
  return (
    <>
      <div style={landingStyle}></div>
      
      <div style={alternativeStyle}>
          <div style={gradientStyle}>
            <animated.div style={{...headerAnimation, fontFamily: 'Protest Strike, sans-serif',margin:'25vh'}}>
              <h1 style={{ fontSize: '75px' }}>
                  Not Your<br />
                  Average<br />
                  Software <br />
                  Engineer<br />
              </h1>
              <div class="btn btn-one" onClick={scrollToAboutMe}  >
                    <span>Who am I ??</span>
              </div>
            </animated.div>
            <div style={{ marginTop :'6rem' }}ref={(ref) => setAboutMeRef(ref)}><AboutMe/></div>
            <div><Myskills/></div>
            <div ><Footer/></div>
          </div>
      </div> 
        
    </>
  )
}

export default LandingPage