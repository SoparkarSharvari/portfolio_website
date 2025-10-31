
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'black',
  ...theme.typography.body2,
  textAlign: 'left',
  color: 'gray',
  font: '-moz-initial',
  paddingLeft:'70px'
}));

function Footer() {
  return (
    <>
    <div style={{background:'black',height:'max-content', width:'100%'}}>
        <Box sx={{ flexGrow: 1 ,paddingX:{xs: 2, sm: 4, md: 6}, paddingY: {xs: 1.875, sm: 3.75}}}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item style={{ paddingLeft: {xs: '10px', sm: '70px'} }}>
              <span ><Link style={{ color: 'gray' ,textDecoration:'none'}} to="/About_Sharvari_Soparkar">About me</Link></span> <br></br>
              <span ><a style={{ color: 'gray' ,textDecoration:'none'}} href="mailto:shravaisoparkar@gmail.com" target="_blank" rel="noopener noreferrer">Contact me</a></span>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item style={{ paddingLeft: {xs: '10px', sm: '70px'} }}>
              <Link style={{ color: 'gray' ,textDecoration:'none'}} to="/myprojects">Projects</Link><br></br>
              <a href="https://leetcode.com/SharvariSoparkar/" target='_blank' className="download-btn" style={{color:'inherit',textDecoration:'none'}} rel="noreferrer">Competitive Coding<br></br></a>
              Experiences<br></br>
              Blogs<br></br>
              <a href="SharvariSoparkarResume.pdf" download='resume.pdf' className="download-btn" style={{color:'inherit',textDecoration:'none'}}>Resume</a>
          </Item>
        </Grid>
      </Grid>
    </Box>
    <br></br>
    <div style={{ background: 'black', height: 'auto', width: '100%', padding: '10px 0'}}>
    <ButtonGroup variant="none" aria-label="Basic button group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white', flexWrap: 'wrap' }}>
        <h4 style={{ margin: '0 10px 0 0' }}>Socials : </h4>
        <Button href="https://github.com/SoparkarSharvari" target="_blank">{<GitHubIcon/>}</Button>
        <Button href="https://www.linkedin.com/in/sharvari-soparkar-608198241/" target="_blank">{<LinkedInIcon/>}</Button>
        <Button href="https://www.instagram.com/sharvari_soparkar/" target="_blank">{<InstagramIcon/>}</Button>
        {/* <Button href="https://facebook.com" target="_blank">{<FacebookIcon/>}</Button> */}
    </ButtonGroup></div><br></br>
     <hr width='max-content'  />
    <div style={{ background: 'black', height: '100px', width: '100%',}}>
        <h6 style={{ textAlign: 'center', color:'white', marginTop:'30px'}}>@2024 | All rights reserved <p style={{color:'white', textAlign: 'center'}}>Last Updated July 2024</p></h6>

      </div>
    </div>

    </>
  )
}

export default Footer