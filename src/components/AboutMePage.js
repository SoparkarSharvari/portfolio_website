import React, { useEffect } from 'react';
import Footer from './Footer';
import '/Users/sharvarisoparkar/Desktop/PortfolioWebsite/portfolio_website/src/style/AboutMePage.css'
import Workflow1 from '../images/Workflow1.png'
import painting from '../images/Being Creative 1.png'
import reading from '../images/Reading A Book 3.png'
import selfie from '../images/Selfie 2.png'
import meditation from '../images/Meditation Yaga 1.png'
import workHome from '../images/Remote Work 2.png'
import coffee from '../images/Coffee Tea 4.png'
import Header from './Header'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
  // boxShadow:'none',
}));

const AboutMePage = () => {
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
    <div style={{backgroundColor:'#ffff'}}>
      <Header/>
        <div style={{padding:'60px'}}>
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
        <Item>
            {/* <img src={Workflow1} alt="" /> */}
            <h2>NOT YOUR AVERAGE SOFTWARE ENGINEER</h2>
            <h3> Blending the precision of a software engineer with the flair of a creative alchemist.</h3>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={Workflow1} alt="" height="250px"/>
            <h2>She is a multi tasker</h2>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={painting} alt="" height="250px"/>
            <h2>She found solace in the gentle strokes of a paintbrush.</h2>
          </Item>
          
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={reading} alt="" height="250px"/>
            <h2>She reads fictions to excape reality</h2>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={selfie} alt="" height="250px"/>
            <h2>She found the balance between friends and family</h2>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={workHome} alt="" height="250px"/>
            <h2> Home is a refuge for her soul.</h2>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={meditation} alt="" height="250px"/>
            <h2>She meditates and makes peace with everyone/thing</h2>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src={coffee} alt="" height="250px" width='inherit'/>
            <h2>Coffee and Code the perfect blend</h2>
          </Item>
        </Grid>
      </Grid>
      
    </Box>
        </div>
        {/* <div class="m">
          <div class="wrapper">
              <div class="c reveal-content">
              <h1 class='h1'>FINALLY !!<br></br> WEBSITE IS DONE !</h1>
              <h1 class='h1'>~ Cilent</h1>
              </div>
              <div class="c top-content">
              <h1 class='h1'>NAH! <br></br>WEBSITE IS NEVER DONE.
              </h1>
              <h1 class='h1'> ~ Developer ☕️</h1>
              </div>
        </div> */}
    {/* </div> */}
    <br></br>
    <div><Footer/></div>
    </div>
  )
}

export default AboutMePage
