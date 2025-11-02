import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import AboutmeGirl from '../AboutmeGirl.png';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ContactMe from './ContactMe';
import Navbar from './Navbar';
function AboutMe() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#267adaff' : 'rgba(255, 255, 255, 0)',
        ...theme.typography.body2,
        textAlign: 'left',
        color: 'gray',
        font: '-moz-initial',
        paddingLeft:'70px',
        boxShadow:'none',
        paddingRight:'7px',

      }));
      
  return (
    
        <div style={{marginTop:'10px' ,  backgroundColor: 'transparent'}}>
            <Box sx={{ flexGrow: 1 ,paddingX:{xs: 2, sm: 4, md: 6}, paddingY: {xs: 1.25, sm: 2.5}}}>
            <Grid container spacing={8}>
                <Grid item xs={12} sm={4}>
                  <Item style={{ padding: 0, boxShadow: 'none', backgroundColor: 'transparent' }}>
                    <img src={AboutmeGirl} alt="SVG" style={{ width: '100%', height: 'auto', maxWidth: '400px' }} /></Item>
                </Grid>
            <Grid item xs={12} sm={8}>
            <Item style={{ textAlign: 'justify', padding: {xs: '10px', sm: '20px'} }}>
               <span style={{color:'black' ,fontFamily: 'Protest Strike, sans-serif' ,fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',}}>Hi, </span>
                <h2 style={{color:'black' ,fontFamily: 'Protest Strike, sans-serif', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', lineHeight: '1.4'}}>I am a Full-stack Developer based in Pune, India.
                <br></br>Here you can see some of my latest <span ><Link style={{ color: '#eea019ff' ,textDecoration:'none'}} to="/myprojects">WORK.</Link></span>
                <br></br><br></br>Feel free to snoop around on my <span ><a href="https://github.com/SoparkarSharvari" style={{ color: '#eea019ff', textDecoration: 'none' }}target="_blank"rel="noopener noreferrer">GITHUB.</a></span>
                <br></br>For inquiries or a how you doing <span style={{ color: '#eea019ff' }}><ContactMe/></span>
                <br></br>I am happy to hear from you.
                <br></br><br></br>P.S. If this wasn't enough for you no worries!
                you can also find out more <span ><Link style={{ color: '#eea019ff' ,textDecoration:'none'}} to="/About_Sharvari_Soparkar">ABOUT ME </Link></span> here ;) </h2>
            </Item>
        </Grid>
      </Grid>
      <div style={{marginTop:'20px'}}><Navbar/></div>
      
    </Box>
      <a 
      href="https://docs.google.com/document/d/1oIObtlf31mDwblpY13uh92z3qRsBoaQZOYXMr9fKucY/export?format=pdf" 
      target="_blank"
      rel="noopener noreferrer"
      className="download-btn"
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color: ' #ebdef0', fontSize: 'clamp(1rem, 3vw, 1.8rem)', alignSelf: 'center'
      ,textDecoration:'none',alignContent:'center', margin: '20px 0'}}>
      <button style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'clamp(50px, 10vw, 80px)',width:'clamp(150px, 20vw, 200px)',
        color:'white',font:'inherit',
        borderRadius:'5px',border:'none',
        background:'black'}}> RESUME <DownloadForOfflineIcon style={{ height: 'clamp(40px, 8vw, 60px)', width: 'auto' }}/></button>
      </a>
        </div>
  )
}

export default AboutMe