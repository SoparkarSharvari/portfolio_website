import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Footer from '../Footer';
import Bnt from '../BackButton'
import { itemData } from './projectData';


const MyProjects = () => {
  const textStyle ={
    color:'black',
    margin:'0px',
    padding: '0.9%',
    fontSize: '2rem',
    fontFamily: 'Protest Strike, sans-serif',
  }
  const backgroundStyle ={
    backgroundColor:'#FFC700',
    height: '100%',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    minHeight: '100vh', 
  }
  const ImgDiv ={
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
  const imageListStyle = {
    width: '150vh',
    
  };
  const handleClick = (link) => {
    window.open(link, '_blank');
  };
  return (
    <>
      <div class='body' style={backgroundStyle}>
      <div style={{ display: 'flex', padding: '5px', width: '55%', justifyContent: 'space-between', alignItems: 'center' }}>
          <Bnt />
          <h1 style={textStyle}>PROJECTS</h1>
        </div>
       
        
        <ListSubheader component="div">GLIMPSE OF PROJECTS I HAVE WORKED ON</ListSubheader>
        <div style={ImgDiv}>
        
        <ImageList sx={{ ...imageListStyle, overflowX: 'hidden' }}>
          <ImageListItem key="Subheader" cols={2}>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    onClick={() => handleClick(item.link)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
            
          ))}
        </ImageList>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MyProjects
