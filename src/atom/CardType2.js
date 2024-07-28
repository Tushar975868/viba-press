import React from "react";
import "./css/CardType2.style.css";

const CardType2 = (props) => {

    return(
        <div className="CardType2" style={{background: `url(${props.image})`, backgroundSize: "cover", }}>

            <span className="cardType2Heading" >{props.heading}</span>

            <span className="cardType2Details">{props.detail}</span>
        </div>
    )
}

export default CardType2;