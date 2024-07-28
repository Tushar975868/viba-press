import React from "react";
import './css/navbar.style.css';
import vibaPressLeftLogo from "./../atom/images/vibaPressLogo.png";
import vibaPressRightLogo from "./../atom/images/rightLogoVibaPress.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { showNavbar, hideNavbar } from "../redux/action/showHideMobileNavBar";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {


    // dispatch
    const dispatch = useDispatch();

    //selector
    const showMobileTab = useSelector( (state) => state.showHideMobileNavBar)

    return(
        <div>
            <nav className="navbar">

                {/* LOGO SECTION OF HEADER for left side */}
                <div className="outer-logo-vibaPress">
                <Link to="/">
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
                        <NavLink className={(e) => {return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive"}} to="/WhoWeAre"><li>Who we are</li></NavLink>
                        <NavLink className={(e) => {return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive"}} to="/WhatWeDo"><li>What we do</li></NavLink>
                        {/* <li>Services we offer</li> */}
                        <NavLink className={(e) => {return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive"}} to="/OurClient"><li>Our Clients</li></NavLink>
                        <li>Our Infrastructure and Team</li>
                    </ul>
                </div>

                {/* Contact Us Page */}
                <div className="contact-us">
                    <span>Contact Us</span>
                </div>

                {/* LOGO SECTION OF HEADER for left side */}
                <Link to="/">
                    <div className="logo-vibaPressRight">
                        <img src={vibaPressRightLogo} alt="Viba Press Logo"/>
                    </div>
                </Link>
                

            </nav>
        </div>
    )
}

export default Navbar;