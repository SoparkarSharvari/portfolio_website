import React, { useEffect } from 'react';
import Footer from './Footer';
import PageHeader from './PageHeader';
import '../style/AboutMePage.css';
import Workflow1 from '../images/Workflow1.png';
import painting from '../images/Being Creative 1.png';
import reading from '../images/Reading A Book 3.png';
import selfie from '../images/Selfie 2.png';
import workHome from '../images/Remote Work 2.png';
import coffee from '../images/Coffee Tea 4.png';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useSpring, animated } from 'react-spring';

const Item = styled(animated.div)(({ theme }) => ({
  background: 'linear-gradient(135deg, #F8A91F 0%, #EC6426 100%)',
  padding: theme.spacing(3),
  textAlign: 'center',
  color: '#632713',
  borderRadius: '50%',
  width: '250px',
  height: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px auto',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  transition: 'all 0.4s ease',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
    transform: 'rotate(45deg)',
    transition: 'all 0.6s ease',
    opacity: 0,
  },
  '&:hover::before': {
    opacity: 1,
    animation: 'shine 1.5s ease-in-out',
  },
}));

const AboutMePage = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const items = [
    { img: Workflow1, text: "She is a multi tasker", alt: "Workflow" },
    { img: painting, text: "She found peace in strokes of a paintbrush.", alt: "Painting" },
    { img: reading, text: "She reads fictions to escape reality", alt: "Reading" },
    { img: selfie, text: "She found the balance between friends and family", alt: "Selfie" },
    { img: workHome, text: "Home is a refuge for her soul.", alt: "Work from Home" },
    { img: coffee, text: "Coffee and Code the perfect blend", alt: "Coffee" },
    { text: "She believes in continuous learning and growth", alt: "Learning" },
    { text: "She loves exploring new technologies and frameworks", alt: "Technology" },
    { text: "She values collaboration and teamwork in projects", alt: "Teamwork" },
    { text: "She enjoys solving complex problems creatively", alt: "Problem Solving" },
    { text: "She is passionate about creating user-friendly designs", alt: "Design" },
    { text: "She strives for excellence in everything she does", alt: "Excellence" },
  ];

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".c").forEach((elem) => {
        var boundRect = elem.getBoundingClientRect();
        var x = e.clientX - boundRect.x;
        var y = e.clientY - boundRect.y;
        elem.style.setProperty("--x", `${x}px`);
        elem.style.setProperty("--y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <animated.div style={springProps}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1
        }}></div>
        <Box sx={{ paddingX: { xs: 2, sm: 4, md: 6 }, paddingY: 4, position: 'relative', zIndex: 1 }}>
          <Box sx={{ width: '100%' }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <h1 style={{
                    color: '#FFFFFF',
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    fontFamily: 'Protest Strike, sans-serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    margin: 0
                  }}>
                    A Creative Alchemist
                  </h1>
                  <p style={{
                    color: '#F8A91F',
                    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                    margin: '10px 0 0 0',
                    fontStyle: 'italic'
                  }}>
                    Discovering the magic in code and creativity
                  </p>
                </div>
              </Grid>

              {items.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Item
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      background: hoveredIndex === index
                        ? 'linear-gradient(135deg, #EC6426 0%, #F8A91F 100%)'
                        : 'linear-gradient(135deg, #F8A91F 0%, #EC6426 100%)',
                      color: '#FFFFFF',
                      transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                    }}
                  >
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.alt}
                        style={{
                          height: '120px',
                          width: '120px',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          marginBottom: '15px',
                          border: '3px solid rgba(255,255,255,0.3)'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                        fontSize: '3rem'
                      }}>
                        ✨
                      </div>
                    )}
                    <p style={{
                      fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                      margin: 0,
                      fontWeight: '600',
                      lineHeight: '1.4',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>
                      {item.text}
                    </p>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <div><Footer /></div>
      </div>
    </animated.div>
  )
}

export default AboutMePage;
