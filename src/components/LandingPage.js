import React, { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import Footer from './Footer';
import Myskills from './Myskills';
import AboutMe from './AboutMe';
import '../style/Aboutme.css';
import loading from '../loadingPng.gif';
import { Box } from '@mui/material';


const LandingPage = () => {

  const gradientStyle = {
    background: 'transparent',
    minHeight: '100vh',
    width: '100%',
    fontFamily: 'Protest Strike, sans-serif',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

    const headerAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1600,
        config: { duration: 2000 },
      });
    
      // const buttonAnimation = useSpring({
      //   opacity: 1,
      //   from: { opacity: 0 },
      //   delay: 1500, // Delay the button animation
      //   config: { duration: 1000 }, // Adjust the duration as needed
      // });
    
    const [showLanding, setShowLanding] = useState(true);
    const [isScrollable, setIsScrollable] = useState(false);

    const landingStyle={
        background: `url(${loading}) no-repeat center center fixed` ,
        backgroundSize: '20%',
        height: '100%',
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
        height:'100%',
        width: '100%',
        background: 'linear-gradient(to bottom, #e91dc4ff 0%, #F8A91F 50%, #FDE3CF 100%)',
        overflow: isScrollable ? 'auto' : 'hidden',
      };
      const [aboutMeRef, setAboutMeRef] = useState(null);

      const scrollToAboutMe = () => {
        setIsScrollable(true);
        if (aboutMeRef) {
          aboutMeRef.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
  return (
    <>
      <div style={landingStyle}></div>
      <div style={alternativeStyle}>
        <Box>
          <div style={gradientStyle}>
            <animated.div style={{...headerAnimation, fontFamily: 'Protest Strike, sans-serif', margin: '10vh 5vw' , height:'100%'}}>
              <h1 style={{
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                textAlign: 'center'
              }}>
                  Not Your<br />
                  Average<br />
                  Software <br />
                  Engineer<br />
              </h1>
              <div class="btn btn-one" onClick={scrollToAboutMe} style={{ margin: '2rem auto', display: 'block' }}>
                    <span>Who am I ??</span>
              </div>
            </animated.div>
          </div>
          <div ref={(ref) => setAboutMeRef(ref)} style={{ minHeight: '100vh' }}><AboutMe/> </div>
          <div><Myskills/>
          </div>
          <Footer/>
        </Box>
      </div>
    </>
  )
}

export default LandingPage