import React from "react";
import './css/navbar.style.css';
import vibaPressLeftLogo from "./../atom/images/vibaPressLogo.png";
import vibaPressRightLogo from "./../atom/images/rightLogoVibaPress.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import MobileNavTabs from "../atom/MobileNavTabs";
import { useState } from "react";

const Navbar = () => {

    const [ activeSideMenu, setActiveSideMenu ] = useState(false);

    return(
        <div>
            <nav className="navbar">

                {/* LOGO SECTION OF HEADER for left side */}
                <div className="logo-vibaPress">
                    <img src={vibaPressLeftLogo} alt="Viba Press Logo"/>
                </div>

                {/* hamburger menu for mobile */}
                <div className="hamburgerMode" >
                    {
                        activeSideMenu ? 
                        <RxCross2 size={30} onClick={() =>  {setActiveSideMenu(false)}}/> : 
                        <GiHamburgerMenu size={30} onClick={() =>  {setActiveSideMenu(true)}}/>
                    }
                </div>

                {activeSideMenu && <MobileNavTabs />}

                {/* Navigation tabs to redirct new page */}
                <div className="nav-tabs">
                    <ul>
                        <li>Who we are</li>
                        <li>What we do</li>
                        <li>Services we offer</li>
                        <li>Our Clients</li>
                        <li>Our Infrastructure and Team</li>
                    </ul>
                </div>

                {/* Contact Us Page */}
                <div className="contact-us">
                    <span>Contact Us</span>
                </div>

                {/* LOGO SECTION OF HEADER for left side */}
                <div className="logo-vibaPressRight">
                    <img src={vibaPressRightLogo} alt="Viba Press Logo"/>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;