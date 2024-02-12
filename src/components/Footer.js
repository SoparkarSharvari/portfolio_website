
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
        <Box sx={{ flexGrow: 1 ,padding:'30px'}}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Item>
              All about me <br></br>
              Contact
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
              Projects<br></br>
              Competitive Coding<br></br>
              Experiences<br></br>
              Blogs<br></br>
              <a href="SharvariSoparkarResume.pdf" download='resume.pdf' className="download-btn" style={{color:'inherit',textDecoration:'none'}}>Resume</a>
          </Item>
        </Grid>
      </Grid>
    </Box>
    <br></br>
    <div style={{ background: 'black', height: '20px', width: '100%',}}>
    <ButtonGroup variant="none" aria-label="Basic button group" style={{ position: 'absolute', color:'white',left: '40%' }}>
        <h4>Socials : </h4>
        <Button>{<GitHubIcon/>}</Button>
        <Button>{<LinkedInIcon/>}</Button>
        <Button>{<InstagramIcon/>}</Button>
        <Button>{<FacebookIcon/>}</Button>
    </ButtonGroup></div><br></br>
     <hr width='max-content'  />
    <div style={{ background: 'black', height: '100px', width: '100%',}}>
        <h6 style={{ position: 'absolute', color:'white',left: '45%' ,marginTop:'30px'}}>@2024 | All rights reserved</h6>
      </div>
    </div>

    </>
  )
}

export default Footer