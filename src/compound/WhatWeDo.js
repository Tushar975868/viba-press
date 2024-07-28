import React from 'react';
import whatWEDOimage from '../atom/images/WhatWeDoImage.jpg';
import './css/WhatWeDo.style.css';
import HomePageText from '../atom/HomePageText';
import { WhatWeDoConstants } from '../constant';
import CardType2 from '../atom/CardType2';
import books from '../atom/images/books.jpg';
import noteBooks from '../atom/images/notebooks.jpg';
import pemplates from '../atom/images/pemplates.jpg';
import monoCartoons from '../atom/images/MonoCartoons.jpg';
import magazines from '../atom/images/magazine.jpg';
import label from '../atom/images/label.jpg';
import corrugatedBoxes from '../atom/images/CorrugatedBoxes.jpg';
import calendars from '../atom/images/Calendars.jpg';
import brouchers from '../atom/images/brouchers.jpg';
import brandingKits from '../atom/images/brandingKits.jpg';
import banners from '../atom/images/banners.jpg';
import rigidBox from '../atom/images/RigidBox.jpg';

const WhatWeDo = () => {

    const style = {
        width: "70%",
        color: "#d5b67a",
    }

  return (
    <div className='whatWeDo-Parent'>
        
        <div className='WhatWeDo-image'>
            <img src={whatWEDOimage} alt="Image is Loading....." />
            <HomePageText quoteLine1={WhatWeDoConstants.heading} style={style}/>
        </div>

        <div className='WhatWeDo-services'>
            <span className='WhatWeDo-heading'>{WhatWeDoConstants.serviceDivHeading}</span>
            
            <div className='WhatWeDo-cards'>
                <CardType2 heading="Books" image={books} />
                <CardType2 heading="Note books" image={noteBooks} />
                <CardType2 heading="Pamphlet" image={pemplates} />
                <CardType2 heading="Calendars" image={calendars} />
                <CardType2 heading="Banners" image={banners} />
                <CardType2 heading="Broucher" image={brouchers} />
                <CardType2 heading="Magazines" image={magazines} />
                <CardType2 heading="Rigid Box" image={rigidBox} />
                <CardType2 heading="Mono Cartons" image={monoCartoons} />
                <CardType2 heading="Corrugated Boxes" image={corrugatedBoxes} />
                <CardType2 heading="Labels" image={label} />
                <CardType2 heading="Branding kits" image={brandingKits} />
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo;
