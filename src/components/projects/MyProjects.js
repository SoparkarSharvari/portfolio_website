import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { itemData } from './projectData';

const MyProjects = () => {
  const textStyle ={
    color:'black'
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
  const webkitScrollbarStyle = `
  &::-webkit-scrollbar {
    width: 0;
    background: transparent; /* Optional: set a background color */
  }
`;
  return (
    <>
      <div class='body' style={backgroundStyle}>
        <h1 style={textStyle}> Projects </h1>
        <div style={{margin:'20px',width:'max-content', padding:'30px',backgroundColor:'whitesmoke',}}> 
          <h3 style={{color:'black',textAlign:'justify'}}>I want to present <br></br> some projects on<br></br> which I worked</h3>
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
