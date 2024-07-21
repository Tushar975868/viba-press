import React from "react";
import Card from "../atom/Cards";
import { cards } from "../constant";
import attentionToDetailImage from "../atom/images/attentionToDetail.jpeg";
import printingToprecisionImage from "../atom/images/precesionFinal.jpeg";
import  serviceAndCommunicationImage from "../atom/images/serviceAndCommunication.jpeg";
import technologicalExpertiseImage from "../atom/images/technologicalExperties.jpeg";
import "./css/CoreCompitancy.style.css";

const CoreCompitancy = () => {

    return(
        <div className="outerCoreCompitancy">
            <span>Our Core Competency</span>
            <div className="coreCompitancy">
                <Card heading={cards.printing_precision} image={printingToprecisionImage} detail={cards.printing_precision_detail}/>
                <Card heading={cards.technological_expertise} image={technologicalExpertiseImage} detail={cards.technological_expertise_detail}/>
                <Card heading={cards.attention} image={attentionToDetailImage} detail={cards.attention_detail}/>
                <Card heading={cards.service_and_communication} image={serviceAndCommunicationImage} detail={cards.service_and_communication_detail}/>
            </div>
        </div>
    )
}

export default CoreCompitancy;