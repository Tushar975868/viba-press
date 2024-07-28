import React from "react";
import "./css/Cards.style.css";

const Card = (props) => {

    return(
        <div className="card" >

            <span className="cardHeading" >{props.heading}</span>

            <div className="cardimage" >
                <img src={props.image} alt="loading"/>
            </div>

            <span className="cardDetail">{props.detail}</span>
        </div>
    )
}

export default Card;