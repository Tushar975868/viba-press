import React from 'react';
import Navbar from './Navbar';
import MobileNavTabs from '../atom/MobileNavTabs';
import { useSelector } from 'react-redux';
import './css/HomePage.style.css';
import homeBackground from '../atom/images/video/homeBackground.mp4';  //'./atom/images/video/homeBackground.mp4';
import HomePageText from '../atom/HomePageText';
import BusinessStrength from '../molecule/BusinessStrength';
import CombineRing from '../molecule/CombineRing';
import CoreCompitancy from '../molecule/CoreCompitancy';
import Footer from './Footer';
import { Home } from '../constant';


const HomePage = () => {

  //selectors
  const showMobileTab = useSelector((state) =>  state.showHideMobileNavBar )
  console.log(showMobileTab, "Tushar")
  return (
    <div className='default-class'>

      {/* <Navbar/> */}

      {showMobileTab && <MobileNavTabs />}

      <div className='homePageBackgroundOfEarth'>
        <video className='videoTag' autoPlay loop muted>
          <source src={homeBackground} type='video/mp4' />
        </video>
      </div>

      <HomePageText quoteLine1={Home.quoteLine1} quoteLine2={Home.quoteLine2}/>

      <BusinessStrength />

      <CombineRing />

      <CoreCompitancy />

      {/* <Footer /> */}
      

      
      
    </div>
  );
}

export default HomePage;
