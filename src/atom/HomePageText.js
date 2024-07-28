import React from "react";
import './css/HomePageText.style.css';
import { Home } from "../constant";

const HomePageText = (props) => {

    return(
        <div className="HomePageText">
            <span style={props.style}>{props.quoteLine1}</span>
            <span>{props.quoteLine2}</span>
            <div className={props.border}/>
        </div>
    )
}

export default HomePageText;