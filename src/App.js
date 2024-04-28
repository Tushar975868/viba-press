import React from 'react';
import Navbar from './compound/Navbar';
import MobileNavTabs from './atom/MobileNavTabs';
import { useSelector } from 'react-redux';
import './App.css';
import homeBackground from './atom/images/video/homeBackground.mp4';
import HomePageText from './atom/HomePageText';
import BusinessStrength from './molecule/BusinessStrength';
import CombineRing from './molecule/CombineRing';
import CoreCompitancy from './molecule/CoreCompitancy';


const App = () => {

  //selectors
  const showMobileTab = useSelector((state) =>  state.showHideMobileNavBar )
  console.log(showMobileTab, "Tushar")
  return (
    <div className='default-class'>

      <Navbar/>

      {showMobileTab && <MobileNavTabs />}

      <div className='homePageBackgroundOfEarth'>
        <video className='videoTag' autoPlay loop muted>
          <source src={homeBackground} type='video/mp4' />
        </video>
      </div>

      <HomePageText />

      <BusinessStrength />

      <CombineRing />

      <CoreCompitancy />
      

      
      
    </div>
  );
}

export default App;
