import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AboutmeGirl from '/Users/sharvarisoparkar/Desktop/PortfolioWebsite/portfolio_website/src/AboutmeGirl.png'

function AboutMe() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
        ...theme.typography.body2,
        textAlign: 'left',
        color: 'gray',
        font: '-moz-initial',
        paddingLeft:'70px',
        boxShadow:'none'
      }));
      
  return (
    <>
        <div style={{height:'100vh',background:'white'}}>
            AboutMe
            <Box sx={{ flexGrow: 1 ,padding:'20px',}}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                <Item >
                <img src={AboutmeGirl} alt="SVG" width='inherit' /></Item>   
                </Grid>
            <Grid item xs={6}>
            <Item>
                Hi, this is sharvari .. 
            </Item>
        </Grid>
      </Grid>
    </Box>
        </div>
    </>
  )
}

export default AboutMe