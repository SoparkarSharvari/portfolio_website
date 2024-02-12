import React, { useEffect } from 'react';
import Footer from './Footer';
import '/Users/sharvarisoparkar/Desktop/PortfolioWebsite/portfolio_website/src/style/AboutMePage.css'
import BackGroundimg from '../images/ Background.png'
import Header from './Header'
const AboutMePage = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
          document.querySelectorAll(".c").forEach((elem) => {
            var boundRect = elem.getBoundingClientRect();
            var x = e.clientX - boundRect.x;
            var y = e.clientY - boundRect.y;
            elem.style.setProperty("--x", `${x}px`);
            elem.style.setProperty("--y", `${y}px`);
          });
        };
    
        document.addEventListener("mousemove", handleMouseMove);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []); 
  return (
    <div style={{backgroundColor:'#ffff'}}>
      <Header/>
        <div>
            <h1> MEETTTTT SHARVARI SOPARKAR</h1>
        </div>
        <div class="m">
          <div class="wrapper">
              <div class="c reveal-content">
              <h1 class='h1'>FINALLY !!<br></br> WEBSITE IS DONE !</h1>
              <h1 class='h1'>~ Cilent</h1>
              </div>
              <div class="c top-content">
              <h1 class='h1'>NAH! <br></br>WEBSITE IS NEVER DONE.
              </h1>
              <h1 class='h1'> ~ Developer ☕️</h1>
              </div>
        </div>
    </div>
    <br></br>
    <div><Footer/></div>
    </div>
  )
}

export default AboutMePage
