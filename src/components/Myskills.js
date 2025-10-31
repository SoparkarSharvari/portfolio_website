import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Clogo from '../images/letter-c.png';
import pylogo from '../images/python.png';
import javalogo from '../images/java.png';
import nodejslogo from '../images/node-js.png';
import sqllogo from '../images/sql-server.png';
import html_css_js from '../images/klipartz.com.png';
import reactjslogo from '../images/logo192.png';
import MongoDB from '../images/MongoDB.jpg';
import mysqlworkbench from '../images/mysqlworkbench.svg';
import AN from '../images/AN.png';
import StarUML from '../images/StarUML.jpg';
import Figma from '../images/Figma Logo.png';
import botpress from '../images/botpress.avif';
import powerbi from '../images/PowerBI.svg';
import weka from '../images/weka.png';
import tableau from '../images/tableau.png';
import github from '../images/github.png';
import express from '../images/express.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100px',
    width:'160px',
    borderRadius:'10px',
    transition: 'transform 0.2s', /* Fix the syntax here */
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  
    ':hover': {
      transform: 'scale(1.1)', /* Increase the size by 10% (adjust as needed) */
    },
  }));
  
function Myskills() {
    const outerdivStyle ={
        height: 'max-content',
        background: 'white'}
  return (
      <>

<div style={outerdivStyle}>
            <div>
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color: 'black', fontSize: 'clamp(2rem, 5vw, 3rem)', alignSelf: 'center' }}>
                    My Skills</h2>
                <h2 style={{color:'rgba(40, 60, 99, 1)',margin:'23px', textAlign: 'center'}}>Languages</h2>
        <Box sx={{ flexGrow: 1 ,paddingX:{xs: 2, sm: 4, md: 6}, paddingBottom:'30px'}}>

        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={4} md={3} lg={2}>
            <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>C
                <br></br><br></br>
                <img src={Clogo} alt="SVG" style={{ width: 'clamp(30px, 6vw, 50px)', height: 'auto' }}/>
            </Item>
            <br></br>
            <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>Html,CSS <br></br>JavaScript<br></br>
                <img src={html_css_js} alt="SVG" style={{ width: 'clamp(30px, 6vw, 50px)', height: 'auto' }}/></Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
            <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>PYTHON/PYTHON3
                <br></br><br></br>
                <img src={pylogo} alt="SVG" style={{ width: 'clamp(30px, 6vw, 50px)', height: 'auto' }}/></Item>
                <br></br>
            <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>REACT.JS <br></br><br></br>
                <img src={reactjslogo} alt="SVG" style={{ width: 'clamp(30px, 6vw, 50px)', height: 'auto' }}/></Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
            <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>JAVA
                <br></br><br></br>
                <img src={javalogo} alt="SVG" style={{ width: 'clamp(30px, 6vw, 50px)', height: 'auto' }}/></Item>
                <br></br>
            <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>NODE.JS
                <br></br><br></br>
                <img src={nodejslogo} alt="SVG" style={{ width: 'clamp(30px, 6vw, 50px)', height: 'auto' }}/>
            </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
            <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>SQL
            <br></br><br></br>
                <img src={sqllogo} alt="SVG" style={{ width: 'clamp(30px, 6vw, 50px)', height: 'auto' }}/></Item>
                <br></br>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>EXPRESS.JS <br></br><br></br><img src={express} alt="SVG" style={{ width: 'clamp(30px, 6vw, 50px)', height: 'auto' }}/></Item>
            </Grid>

        </Grid>
        <h2 style={{color:'rgba(40, 60, 99, 1)',margin:'23px', textAlign: 'center'}}>Softwares</h2>
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>MongoDB Compass <br></br><br></br><img src={MongoDB} alt="SVG" style={{ height: 'clamp(30px, 6vw, 48px)', width: 'clamp(60px, 12vw, 100px)' }} /></Item>
            <br></br>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>PowerBI <br></br><br></br> <img src={powerbi} alt="SVG" style={{ height: 'clamp(30px, 6vw, 50px)', width: 'clamp(30px, 6vw, 50px)' }} /></Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>MySQL <br></br> Workbench<br></br><img src={mysqlworkbench} alt="SVG" style={{ height: 'clamp(30px, 6vw, 48px)', width: 'clamp(30px, 6vw, 50px)' }} /></Item>
            <br></br>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>Tableau <br></br><br></br><img src={tableau} alt="SVG" style={{ height: 'clamp(30px, 6vw, 50px)', width: 'clamp(30px, 6vw, 50px)' }} /></Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>Anaconda<br></br> Navigator <br></br><img src={AN} alt="SVG" style={{ height: 'clamp(30px, 6vw, 48px)', width: 'clamp(30px, 6vw, 50px)' }} /></Item>
            <br></br>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>WEKA <br></br><br></br> <img src={weka} alt="SVG" style={{ height: 'clamp(30px, 6vw, 50px)', width: 'clamp(30px, 6vw, 50px)' }} /></Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>StarUML <br></br> <br></br><img src={StarUML} alt="SVG" style={{ height: 'clamp(36px, 7vw, 58px)', width: 'clamp(36px, 7vw, 60px)' }} /></Item>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>Figma <br></br> <img src={Figma} alt="SVG" style={{ height: 'clamp(54px, 11vw, 90px)', width: 'clamp(48px, 10vw, 80px)' }} /></Item><br></br>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>BotPress <br></br><br></br> <img src={botpress} alt="SVG" style={{ height: 'clamp(30px, 6vw, 50px)', width: 'clamp(30px, 6vw, 50px)' }} /></Item><br></br>
            </Grid>
        </Grid>
        <h2 style={{color:'rgba(40, 60, 99, 1)',margin:'23px', textAlign: 'center'}}>Version Control Tools</h2>
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={4} md={3} lg={2}>
            <Item style={{ height: 'clamp(80px, 15vw, 100px)', width: 'clamp(120px, 20vw, 160px)' }}>GitHub <br></br><br></br><img src={github} alt="SVG" style={{ height: 'clamp(30px, 6vw, 50px)', width: 'clamp(30px, 6vw, 50px)' }} /></Item>
            </Grid>
        </Grid>
        </Box>
       
        </div></div>
      </>
    
  )
}

export default Myskills