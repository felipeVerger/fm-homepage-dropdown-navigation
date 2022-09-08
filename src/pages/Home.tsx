import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import databizBrand from '../assets/images/client-databiz.svg'
import audiophileBrand from '../assets/images/client-audiophile.svg'
import meetBrand from '../assets/images/client-meet.svg'
import makerBrand from '../assets/images/client-maker.svg'
import hero from '../assets/images/image-hero-desktop.png'
import heroMobile from '../assets/images/image-hero-mobile.png'

import './Home.css'

const Home = () => {
    const [isMobile, setIsMobile] = React.useState(false);

  // Listenener for window resize
    window.addEventListener('resize', () => {
        const windowWidth: number = window.innerWidth;
        if (windowWidth <= 1168) {
            setIsMobile(true);
        }
    })
  
    
  return (
    <div className="container">
        <Navbar/>
        <div className="home-block">
            <div className="home-content">
                <h1>Make<br/> remote work</h1>
                <p>Get your team in sync, no matter your location.<br/>
                    Streamline processes, create team rituals, and<br/>
                    watch productivity soar.
                </p>
                <button>Learn more</button>
                <div className="brands">
                    <img src={databizBrand} alt="" />
                    <img src={audiophileBrand} alt="" />
                    <img src={meetBrand} alt="" />
                    <img src={makerBrand} alt="" />
                </div>
            </div>
            <img src={isMobile ? heroMobile : hero} alt="hero" />
        </div>
    </div>
  )
}

export default Home