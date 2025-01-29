import React from "react";
import './css/BusinessStrength.style.css';
import BusinessStrengthImage from './../atom/images/businessStrength.jpg';


const BusinessStrength = () => {


    return(
        <div className="BusinessStrength">

            <div className="content">
                <span>Our Core Values and Convictions</span>
                <span >
                    At <b>PrinTek</b>, 
                    we're not just about printing books, paper, and various materials;
                    we're about crafting experiences that leave a lasting impression.
                    Our commitment goes beyond ink and paper; 
                    we're dedicated to helping businesses tell their stories, 
                    share their knowledge, 
                    and connect with their audiences in meaningful ways.
                    Whether it's printing educational materials that inspire learning, 
                    publishing books that captivate readers, 
                    or creating marketing collateral that drives engagement, 
                    we're here to bring your vision to life.  
                    Our printing press isn't just a service provider,
                    it's a partner in shaping narratives, fostering connections, 
                    and making a tangible impact on the world.
                </span>
            </div>

            <div className="image">
                <img src={BusinessStrengthImage} alt="loading" />
            </div>

        </div>
    )
}

export default BusinessStrength;