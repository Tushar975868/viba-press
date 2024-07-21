import React from "react";
import "./css/Cards.style.css";

const Card = ({heading, image, detail}) => {

    return(
        <div className="card">

            <span className="cardHeading">{heading}</span>

            <div className="cardimage">
                <img src={image} alt="loading"/>
            </div>

            <span className="cardDetail">{detail}</span>
        </div>
    )
}

export default Card;