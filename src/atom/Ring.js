import React from "react";
import './css/Ring.style.css';

const Ring = ({ borderColor, animationDuration, backgroundColor, spanText }) => {

    const ringStyle = {
        animation: `draw-ring ${animationDuration}s ease-in-out infinite`,
        borderColor: borderColor,
        backgroundColor: backgroundColor
    };

    return(
        <div className="ringHome">
            <div className="ring" style={ringStyle}>
            <span className="ringContent">{spanText}</span>
            </div>
            
        </div>
        
    )
}

export default Ring;