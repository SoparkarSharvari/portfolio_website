import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import BlogPostWebsiteImage from '/Users/sharvarisoparkar/Desktop/PortfolioWebsite/portfolio_website/src/images/BlogPostWebsite.png'

import { itemData } from './projectData';
import { Padding } from '@mui/icons-material';

const MyProjects = () => {
  const textStyle ={
    color:'black',
    margin:'0px',
    padding: '0.9%'
  }
  const backgroundStyle ={
    backgroundColor:'#FFC700',
    height: 'max-content',
  }
  const ImgDiv ={
    margin:'20px',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
  const imageListStyle = {
    width: '150vh',
    
  };
 
  return (
    <>
      <div class='body' style={backgroundStyle}>
        <h1 style={textStyle}> PROJECTS </h1>
        
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
    </>
  )
}

export default MyProjects
