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
import Footer from './compound/Footer';
import HomePage from './compound/HomePage';


const App = () => {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
