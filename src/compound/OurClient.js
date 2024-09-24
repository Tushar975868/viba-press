import React from 'react';
import CardType2 from '../atom/CardType2';
import './css/OurClient.style.css';
import { OurCliensConstants } from '../constant';
import sonyLOGO from '../atom/images/clientLogo/sonyLogo.png';
import BureauOfIndian from '../atom/images/clientLogo/bureau-of-indian-standards.png';
import crpf from '../atom/images/clientLogo/crpf.png';
import who from '../atom/images/clientLogo/WHO.png';
import bhel from '../atom/images/clientLogo/bhel.png';
import icar from '../atom/images/clientLogo/icar_logo.jpg';
import chicago_pizza from '../atom/images/clientLogo/chicago_pizza.png';
import nsic from '../atom/images/clientLogo/nsic-national-small-industries-corporation-logo.png';
import scert from '../atom/images/clientLogo/scert.png';
import publication_division from '../atom/images/clientLogo/publication_division.png';
import nhdc from '../atom/images/clientLogo/nhdc.jpg';
import nationalCouncilOfCement from '../atom/images/clientLogo/nationalCouncilOfCement.png';
import nstfdc from '../atom/images/clientLogo/nstfdc.png';
import ncert from '../atom/images/clientLogo/ncert.png';
import nhrcLogo from '../atom/images/clientLogo/nhrc-logo.png';
import iiip from '../atom/images/clientLogo/iiip.png';
import irfc from '../atom/images/clientLogo/irfc.png';
import itdc from '../atom/images/clientLogo/itdc.png';
import sceb from '../atom/images/clientLogo/sceb.png';
import hudco from '../atom/images/clientLogo/hudco.png';
import Guru_Gobind_Singh_Indraprastha_University12 from '../atom/images/clientLogo/Guru_Gobind_Singh_Indraprastha_University12.png';
import dces from '../atom/images/clientLogo/dcse.png';
import dgaqa from '../atom/images/clientLogo/dgaqa.png';
import ccras from '../atom/images/clientLogo/ccras.jpg';
import cvc from '../atom/images/clientLogo/cvc.png';
import aepc from '../atom/images/clientLogo/aepc_logo.gif';
import aryavratBank from '../atom/images/clientLogo/aryavratBank.png';
import ibg from '../atom/images/clientLogo/ibg.png';
import iaf from '../atom/images/clientLogo/iaf_logo.png';
import NHBLOGO from '../atom/images/clientLogo/NHBLOGO.png';
import ntpc from '../atom/images/clientLogo/ntpc.png';
import nfl_logo from '../atom/images/clientLogo/nfl-logo-new.png';
import nisd from '../atom/images/clientLogo/nisd.png';
import soi from '../atom/images/clientLogo/soi.png';
import { useSelector, useDispatch } from 'react-redux';
import MobileNavTabs from '../atom/MobileNavTabs';

const OurClient = () => {

  const showMobileTab = useSelector((state) =>  state.showHideMobileNavBar )

  const CardType = [
    {image: sonyLOGO,  width: "100px",  height: "100px"},
    {image: BureauOfIndian,  width: "100px",  height: "100px"},
    {heading: "Army Aviation Flight safety", width: "100px", height:"10px", color:"red", size:"15px", weight:"600", paddingTop:"30px"},
    { image: crpf, width: "90px", height: "100px", },
    { image: who, width: "100px", height: "100px", },
    { image: bhel, width: "120px", height: "100px", },
    { image: chicago_pizza, width: "120px", height: "100px", },
    { image: nsic, width: "120px", height: "65px", },
    { image: scert, width: "79px", height: "75px", },
    { image: publication_division, width: "69px", height: "75px", },
    { image: nhdc, width: "69px", height: "75px", },
    { image: itdc, width: "200px", height: "70px"},
    { image: nationalCouncilOfCement, width: "75px", height: "81px", },
    { image: nstfdc, width: "78px", height: "81px", },
    { image: ncert, width: "60px", height: "90px", },
    { image: nhrcLogo, width: "62px", height: "90px", },
    { image: icar, width: "62px", height: "90px", },
    { image: iiip, width: "80px", height: "100px", },
    { image: irfc, width: "120px", height: "81px", },
    { image: sceb, width: "99px", height: "90px", },
    { image: hudco, width: "80px", height: "100px", },
    { image: Guru_Gobind_Singh_Indraprastha_University12, width: "197px", height: "80px", },
    { image: dces, width: "110px", height: "90px", },
    { image: dgaqa, width: "253px", height: "75px", },
    { image: cvc, width: "120px", height: "80px", },
    { image: ccras, width: "75px", height: "75px", },
    { image: aepc, width: "315px", height: "60px", },
    { image: aryavratBank, width: "80px", height: "80px", },
    { image: ibg, width: "84px", height: "80px", },
    { image: iaf, width: "80px", height: "90px", },
    { image: NHBLOGO, width: "390px", height: "75px", },
    { image: ntpc, width: "150px", height: "75px", },
    { image: nfl_logo, width: "80px", height: "70px", },
    { image: nisd, width: "337px", height: "75px", },
    { image: soi, width: "310px", height: "75px", },
  ]
  return (
    <div className='ourClient'>
      {showMobileTab && <MobileNavTabs />}
        <span className='ourClient-heading'>{OurCliensConstants.heading}</span>
        <div className='ourClient-cards'>

          {
            CardType.map( cardData => <CardType2 image={cardData?.image} heading={cardData?.heading} width={cardData?.width} height={cardData?.height} color={cardData?.color} size={cardData?.size} weight={cardData?.weight} paddingTop={cardData?.paddingTop} />)
          }

        </div>

    </div>
  )
}

export default OurClient;
