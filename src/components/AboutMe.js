import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import AboutmeGirl from '/Users/sharvarisoparkar/Desktop/PortfolioWebsite/portfolio_website/src/AboutmeGirl.png'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

function AboutMe() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
        ...theme.typography.body2,
        textAlign: 'left',
        color: 'gray',
        font: '-moz-initial',
        paddingLeft:'70px',
        boxShadow:'none',
      }));
      
  return (
    <>
        <div style={{height:'100vh',background:'white'}}>
            <Box sx={{ flexGrow: 1 ,padding:'20px',}}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                <Item >
                <img src={AboutmeGirl} alt="SVG" width='inherit' /></Item>   
                </Grid>
            <Grid item xs={6}>
            <Item>
               <span style={{color:'black' ,fontFamily: 'Protest Strike, sans-serif' ,fontSize:'40px',}}>Hi, </span>
                <h2 style={{color:'black' ,fontFamily: 'Protest Strike, sans-serif', fontSize:'30px'}}>I am a Full-stack Developer based in Maharashtra, India.
                <br></br>Here you can see some of my latest <span ><Link style={{ color: 'gray' ,textDecoration:'none'}} to="/myprojects">WORK.</Link></span>

                <br></br><br></br>Feel free to snoop around on my <span ><a href="https://github.com/SoparkarSharvari" style={{ color: 'gray', textDecoration: 'none' }}target="_blank"rel="noopener noreferrer">GITHUB.</a></span>
                <br></br>For inquiries or a how you doing <span style={{ color: 'gray' }}>CONTACT ME,</span>
                <br></br>I am happy to hear from you
                
                <br></br><br></br>P.S. If this wasn't enough for you no worries!
                you can also find out more <span ><Link style={{ color: 'gray' ,textDecoration:'none'}} to="/About_Sharvari_Soparkar">ABOUT ME</Link></span> here ;) </h2>
            </Item>
        </Grid>
      </Grid>
    </Box>
    <a href="SharvariSoparkarResume.pdf" download='resume.pdf' className="download-btn" 
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color: 'black', fontSize: '30px', alignSelf: 'center' 
      ,textDecoration:'none',alignContent:'center'}}>
      <button style={{
        height:'80px',width:'200px',
        color:'white',font:'inherit',
        borderRadius:'5px',border:'none',
        background:'black'}}>RESUME  <DownloadForOfflineIcon height='80px'/></button>
      </a>
        </div>
    </>
  )
}

export default AboutMe