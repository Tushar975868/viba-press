import React from 'react';
import './css/ImageCrousalCard.style.css';

const ImageCrousalCard = (props) => {
  return (
    <div className='imageCrousalCard' >
        <div className='imageCrousalContent' style={{paddingTop: props.padding}}>
            <span style={{fontWeight: "600", fontSize: "20px", color: "rgb(40, 35, 28)"}}>{props.heading}</span><br/><br/>
            <span style={{fontWeight: "300", fontSize: "15px", color: "rgb(40, 35, 28)"}}>{props.text}</span>
        </div>

        <div className='imageCrousalImage' style={{paddingTop: props.paddingImage}}>
            <img src={props.image} alt="image is Loading....." />
        </div>
      
    </div>
  )
}

export default ImageCrousalCard
