import React from "react";
import Ring from "../atom/Ring";
import "./css/CombineRing.style.css";

const CombineRing = () => {

    return(
        <div className="main">
            <span className="heading">We focus on delivering better experice end-to-end</span>
            <div className="heading2"> 
                <span><b>Viba</b> is dedicated to revolutionizing the printing press industry by optimizing the printing experience (PX),</span>
                <span>enhance their product quality (PQ) and efficiency.</span>
            </div>

            <div className="combineRing"> 
                <div>
                    <Ring borderColor="black" animationDuration={20} backgroundColor="red" spanText="Design"/>
                    <span>From Concept to Creation</span>
                </div>

                <div>
                    <Ring borderColor="black" animationDuration={2}  backgroundColor="blue" spanText="Print"/>
                    <span>From Digital to Tangible</span>
                </div>

                <div>
                    <Ring borderColor="black" animationDuration={2}  backgroundColor="yellow" spanText="Finish"/>
                    <span>From Raw to Refined</span>

                </div>

                <div>
                    <Ring borderColor="black" animationDuration={20} backgroundColor="green" spanText="Deliver"/>
                    <span>From Production to Possession</span>
                </div>
            </div>
            
        </div>
    )
}

export default CombineRing;