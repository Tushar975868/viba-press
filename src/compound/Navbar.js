import React, {useEffect, useState} from "react";
import './css/navbar.style.css';
import vibaPressLeftLogo from "./../atom/images/vibaPressLogo.png";
import vibaPressRightLogo from "./../atom/images/rightLogoVibaPress.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { showNavbar, hideNavbar } from "../redux/action/showHideMobileNavBar";
import { Link, NavLink } from "react-router-dom";
import ContactUs from "./ContactUs";

const Navbar = () => {

    const [activeTab, setACtiveTab] = useState(0);
    const [contactUsPopup, setContactUsPopup] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);  
      },[activeTab]);


    // dispatch
    const dispatch = useDispatch();

    //selector
    const showMobileTab = useSelector( (state) => state.showHideMobileNavBar)

    return(
        <div onMouseLeave={() => setContactUsPopup(false)}>
            <nav className="navbar">

                {/* LOGO SECTION OF HEADER for left side */}
                <div className="outer-logo-vibaPress">
                <Link to="/" onClick={() => setACtiveTab(0)}>
                    <div className="logo-vibaPress">
                        <img src={vibaPressLeftLogo} alt="Viba Press Logo"/>
                    </div>
                </Link>
                </div>

                {/* hamburger menu for mobile */}
                <div className="hamburgerMode" >
                    {
                        showMobileTab ? 
                        <RxCross2 size={30} onClick={() => dispatch(hideNavbar())}/> : 
                        <GiHamburgerMenu size={30} onClick={() => dispatch(showNavbar())}/>
                    }
                </div>

                {/* Navigation tabs to redirct new page */}
                <div className="nav-tabs">
                    <ul>
                        <NavLink className={(e) => {return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive"}} to="/WhoWeAre" onClick={() => setACtiveTab(1)}><li>Who we are</li></NavLink>
                        <NavLink className={(e) => {return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive"}} to="/WhatWeDo" onClick={() => setACtiveTab(2)}><li>What we do</li></NavLink>
                        {/* <li>Services we offer</li> */}
                        <NavLink className={(e) => {return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive"}} to="/OurClient" onClick={() => setACtiveTab(3)}><li>Our Clients</li></NavLink>
                        <NavLink className={(e) => {return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive"}} to="/OurInfraAndTeams" onClick={() => setACtiveTab(4)}><li>Our Infrastructure and Machine</li></NavLink>
                    </ul>
                </div>

                {/* Contact Us Page */}
                <div className="contact-us"  >
                    <span onMouseEnter={() => setContactUsPopup(true)}>Contact Us</span>
                </div>

                {/* pop up raise */}
                <div onMouseLeave={() => setContactUsPopup(false)}>
                    {
                        contactUsPopup && <ContactUs />
                    }
                </div>

                {/* LOGO SECTION OF HEADER for left side */}
                <Link to="/" onClick={() => setACtiveTab(0)}>
                    <div className="logo-vibaPressRight">
                        <img src={vibaPressRightLogo} alt="Viba Press Logo"/>
                    </div>
                </Link>
                

            </nav>
        </div>
    )
}

export default Navbar;