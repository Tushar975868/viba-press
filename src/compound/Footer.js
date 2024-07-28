import React from "react";
import "./css/Footer.style.css";
import { footer } from "../constant";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {

    return(
        <div className="footer">

            <div className="address">
                <div className="aboutAddress">
                    <span className="addressHeaderText">{footer.vibaPress}</span>
                    <span className="addressAboutText">{footer.aboutViba}</span>
                </div>
                <div className="addressBelow">
                    <span style={{paddingBottom: "5px"}}>Address</span>
                    <span style={{fontSize: "small"}}>{footer.vibaPress}</span>
                    <span style={{fontSize: "small", color: "gray" }}>C-66/3,</span>
                    <span style={{fontSize: "small", color: "gray" }}>Okhla Industrial Area,</span>
                    <span style={{fontSize: "small", color: "gray" }}>Phase II,</span>
                    <span style={{fontSize: "small", color: "gray" }}> New Delhi, 110 020</span>
                </div>
            </div>

            <div className="aboutAndServices">
                <span className="addressHeaderText">{footer.aboutAndServicesHeader}</span>
                <div className="ul_aboutAndServices">
                    <span>Books</span>
                    <span>Notebook</span>
                    <span>Calendars</span>
                    <span>Pamphlet</span>
                    <span>Banners</span>
                    <span>Broucher</span>
                    <span>Magazines</span>
                    <span>Rigid Boxes</span>
                    <span>Mono Cartons</span>
                    <span>Corrugated Boxes</span>
                    <span>Labels</span>
                    <span>Paper bags</span>
                    <span>Branding Kits</span>
                </div>
            </div>

            <div className="contactsAndEmail">
                <span className="addressHeaderText">Get in touch</span>
                <div className="contactsAndEmail_innerdiv">
                    <FaPhoneVolume color="#03fce8"/>
                    <span style={{paddingLeft: "10px"}}>{footer.contact}</span>
                </div>
                <div className="contactsAndEmail_innerdiv">
                    <MdAttachEmail color="#03fce8"/>
                    <span style={{paddingLeft: "10px"}}>{footer.email}</span>
                </div>    
            </div>
            
        </div>
    )
}

export default Footer;