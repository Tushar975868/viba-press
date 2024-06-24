import React from "react";
import './css/MobileNavTabs.style.css';

const MobileNavTabs = () => {

    return(
        <div className="SideMobileNavTab">
             <ul>
                <li>Who we are</li>
                <li>What we do</li>
                <li>Services we offer</li>
                <li>Our Clients</li>
                <li  className="border font-bold bg-pink-400 border-black">Our Infrastructure and Team</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default MobileNavTabs;