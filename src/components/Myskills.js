import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Clogo from '../images/letter-c.png';
import pylogo from '../images/python.png'
import javalogo from'../images/java.png'
import nodejslogo from '../images/node-js.png'
import sqllogo from '../images/sql-server.png'
import html_css_js from '../images/klipartz.com.png'
import reactjslogo from '../images/logo192.png'
import MongoDB from '../images/MongoDB.jpg'
import mysqlworkbench from '../images/mysqlworkbench.svg'
import AN from '../images/AN.png'
import StarUML from '../images/StarUML.jpg'
import Figma from '../images/Figma Logo.png'
import botpress from '../images/botpress.avif'
import powerbi from '../images/PowerBI.svg'
import weka from '../images/weka.png'
import tableau from '../images/tableau.png'
import github from '../images/github.png'
import express from '../images/express.png'

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
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color: 'black', fontSize: '50px', alignSelf: 'center' }}>
                    My Skills</h2>
                <h2 style={{color:'rgba(40, 60, 99, 1)',margin:'23px'}}>Languages</h2>
        <Box sx={{ flexGrow: 1 ,padding:'20px'}}>
        
        <Grid container spacing={3} style={{paddingLeft:'3vh',paddingRight:'0vh'}}>
            <Grid item xs={2}>
            <Item >C 
                <br></br><br></br>
                <img src={Clogo} alt="SVG" width='50px'/>
            </Item>
            <br></br>
            <Item>Html,CSS <br></br>JavaScript<br></br>
                <img src={html_css_js} alt="SVG" width='50px'/></Item>
            </Grid>
            <Grid item xs={2}>
            <Item>PYTHON/PYTHON3
                <br></br><br></br>
                <img src={pylogo} alt="SVG" width='50px'/></Item>
                <br></br>
            <Item>REACT.JS <br></br><br></br>
                <img src={reactjslogo} alt="SVG" width='50px'/></Item>
            </Grid>
            <Grid item xs={2}>
            <Item>JAVA
                <br></br><br></br>
                <img src={javalogo} alt="SVG" width='50px'/></Item>
                <br></br>
            <Item>NODE.JS
                <br></br><br></br>
                <img src={nodejslogo} alt="SVG" width='50px'/>
            </Item>
            </Grid>
            <Grid item xs={2}>
            <Item>SQL
            <br></br><br></br>
                <img src={sqllogo} alt="SVG" width='50px'/></Item>
                <br></br>
                <Item>EXPRESS.JS <br></br><br></br><img src={express} alt="SVG" width='50px'/></Item>
            </Grid>
            <Grid item xs={2}>
            <Item>xs=8</Item>
            </Grid>
            <Grid item xs={2}>
            <Item>xs=4</Item>
            </Grid>
        </Grid>
        <h2 style={{color:'rgba(40, 60, 99, 1)',margin:'23px'}}>Softwares</h2>
        <Grid container spacing={3} style={{paddingLeft:'3vh',paddingRight:'0vh'}}>
            <Grid item xs={2}>
                <Item>MongoDB Compass <br></br><br></br><img src={MongoDB} alt="SVG" height='48px'width='100px' /></Item>
            <br></br>
                <Item>PowerBI <br></br><br></br> <img src={powerbi} alt="SVG" height='50px'width='50px' /></Item>
            </Grid>
            <Grid item xs={2}>
                <Item>MySQL <br></br> Workbench<br></br><img src={mysqlworkbench} alt="SVG" height='48px'width='50px' /></Item>
            <br></br>
                <Item>Tableau <br></br><br></br><img src={tableau} alt="SVG" height='50px'width='50px' /></Item>
            </Grid>
            <Grid item xs={2}>
                <Item>Anaconda<br></br> Navigator <br></br><img src={AN} alt="SVG" height='48px'width='50px' /></Item> 
            <br></br>
                <Item>WEKA <br></br><br></br> <img src={weka} alt="SVG" height='50px'width='50px' /></Item>
            </Grid>
            <Grid item xs={2}>
                <Item>StarUML <br></br> <br></br><img src={StarUML} alt="SVG" height='58px'width='60px' /></Item>
            </Grid>
            <Grid item xs={2}>
                <Item>Figma <br></br> <img src={Figma} alt="SVG" height='90px'width='80px' /></Item><br></br>
            </Grid>
            <Grid item xs={2}>
                <Item>BotPress <br></br><br></br> <img src={botpress} alt="SVG" height='50px'width='50px' /></Item><br></br>
            </Grid>
        </Grid>
        <h2 style={{color:'rgba(40, 60, 99, 1)',margin:'23px'}}>Version Control Tools</h2>
        <Grid container spacing={3} style={{paddingLeft:'3vh',paddingRight:'0vh'}}>
            <Grid item xs={2}>
            <Item >GitHub <br></br><br></br><img src={github} alt="SVG" height='50px'width='50px' /></Item>
            </Grid>
        </Grid>
        </Box>
        </div></div>
      </>
    
  )
}

export default Myskills