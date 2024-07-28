import { useEffect, useRef, useState } from 'react';
import React from 'react';
import ImageCrousalCard from '../atom/ImageCrousalCard';
import './css/ImageCrousal.style.css';
import {WhoWeAreConstants} from '../constant';
import deliveryAward from '../atom/images/deliveryAward.jpeg';
import certificationOfHonour from '../atom/images/certificationOfHonour.jpeg';
import economicSurveyOfIndiaC from '../atom/images/economicSurveyOfIndiaC.jpeg';
import indianConstitutionOfIndian from '../atom/images/indianConstitutionOfIndian.png';
import enterprenareOfYear from '../atom/images/enterprenareOfYear.jpeg';

const ImageCrousal = () => {
    const boxRef = useRef(null);
    const intervalRef = useRef(null);

    const [crouselItems, setCrouselItems] = useState([
        { heading: WhoWeAreConstants.deliveryAward, text: WhoWeAreConstants.deliveryAwardContent, image: deliveryAward, padding: "90px", paddingImage:"90px"},
        { heading: WhoWeAreConstants.certificationOfHonour, text: WhoWeAreConstants.certificationOfHonourContent, image: certificationOfHonour, padding:"100px"},
        { heading: WhoWeAreConstants.economicSurveyOfIndia, text: WhoWeAreConstants.economicSurveyOfIndiaContent, image: economicSurveyOfIndiaC, padding:"100px", paddingImage:"100px"},
        { heading: WhoWeAreConstants.indianConstitutionOfIndia, text: WhoWeAreConstants.indianConstitutionOfIndiaContent, image: indianConstitutionOfIndian, padding:"100px", paddingImage:"100px"},
        { heading: WhoWeAreConstants.enterpreneurOfTheYear, text: WhoWeAreConstants.enterpreneurOfTheYearContent, image: enterprenareOfYear, padding:"90px", paddingImage:"90px"},
 ]);

 

    useEffect(() => {
        const startInterval = () => {
            const interval = setInterval(() => {
                const box = boxRef.current;
                if (box) {
                    const width = box.clientWidth;
                    box.scrollLeft = box.scrollLeft + width;
                    const maxWidth = box.scrollWidth -width;
                    if(Math.ceil(box.scrollLeft) === maxWidth){
                        setCrouselItems(prevItems => [...prevItems, ...prevItems])
                    }
                    
                }
            }, 4000);
            intervalRef.current = interval;
        }

        startInterval()
        return () => clearInterval(intervalRef.current);

    }, []);


    const handleOnMouseEnter = () => {
       if(intervalRef.current){
        clearInterval(intervalRef.current);
       }
    }

    const handleOnMouseLeave = () => {
        const startInterval = () => {
            const interval = setInterval(() => {
                const box = boxRef.current;
                if(box){
                    const width = box.clientWidth;
                    box.scrollLeft = box.scrollLeft + width;
                    const maxWidth = box.scrollWidth -width;
                    if(Math.ceil(box.scrollLeft) === maxWidth){
                        setCrouselItems(prevItems => [...prevItems, ...prevItems])
                    }
                }
            }, 4000)

            intervalRef.current = interval;
        }

        startInterval();
     }

    

  return (
    <div className='mainImagerousal' onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >
        <span className='mainImagerousalHeader'>Our Accomplishments</span>
        <div className='imageCrousal' ref={boxRef}>
            {crouselItems.map((item, index) => (
                <ImageCrousalCard 
                key={index}
                heading={item.heading}
                text={item.text}
                image={item.image}
                padding={item.padding}
                paddingImage={item.paddingImage} />
            ))}
        </div>
    </div>
  )
}

export default ImageCrousal
