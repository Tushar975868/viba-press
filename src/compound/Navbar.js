import React from "react";
import './css/navbar.style.css';
import vibaPressLeftLogo from "./../atom/images/vibaPressLogo.png";
import vibaPressRightLogo from "./../atom/images/rightLogoVibaPress.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { showNavbar, hideNavbar } from "../redux/action/showHideMobileNavBar";

const Navbar = () => {


    // dispatch
    const dispatch = useDispatch();

    //selector
    const showMobileTab = useSelector( (state) => state.showHideMobileNavBar)

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
                        showMobileTab ? 
                        <RxCross2 size={30} onClick={() => dispatch(hideNavbar())}/> : 
                        <GiHamburgerMenu size={30} onClick={() => dispatch(showNavbar())}/>
                    }
                </div>

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