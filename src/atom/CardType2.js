import React from "react";
import "./css/CardType2.style.css";

const CardType2 = (props) => {

    return(
        <div className="CardType2" style={{background: `url(${props.image})`, backgroundSize: "cover", width: props.width, height: props.height}}>

            <span className="cardType2Heading" style={{color: props.color, fontSize: props.size, fontWeight: props.weight, paddingTop: props.paddingTop}}>{props.heading}</span>

            <span className="cardType2Details">{props.detail}</span>
        </div>
    )
}

export default CardType2;