import React from "react";
import WhoWeAreVideoBackground from "../atom/images/video/WhoWeAreVideo.mp4";
import "./css/WhoWeAre.style.css";
import HomePageText from "../atom/HomePageText";
import { WhoWeAreConstants } from "../constant";
import ImageCrousal from "../molecule/ImageCrousal";
import { useSelector, useDispatch } from 'react-redux';
import MobileNavTabs from '../atom/MobileNavTabs';

const WhoWeAre = () => {

    const showMobileTab = useSelector((state) =>  state.showHideMobileNavBar )

    return(
        <div className="WhoWeAre_DefaultClass">
            {showMobileTab && <MobileNavTabs />}

            {/* who we are video section */}
            <div className='WhoWeAreVideo'>
                <video className='WhoWeAreVideoTag' autoPlay loop muted>
                    <source src={WhoWeAreVideoBackground} type='video/mp4' />
                </video>
            </div>

            {/* text section over video */}
            <div >
                <HomePageText quoteLine1={WhoWeAreConstants.establish} border={"border"}/>
            </div>

            {/* our story section */}
            <div className="ourStory">
                <span style={{fontWeight: "600", fontSize: "30px"}}>{WhoWeAreConstants.ourStory}</span><br/>
                {
                WhoWeAreConstants.OurStoryDetail.split('\n').map(line => (
                    <span style={{fontWeight: "300", fontSize: "17px"}}>{line}</span>
                ))
                }
                <br/>
                <br/>
                <span style={{fontWeight: "600", fontSize: "30px"}}>{WhoWeAreConstants.ourMission}</span><br/>
                <span style={{fontWeight: "300", fontSize: "18px"}}>{WhoWeAreConstants.mission}</span>
                <ul className="outStoryUl">
                    <li className="outStoryUl">{WhoWeAreConstants.missionPoint1}</li>
                    <li>{WhoWeAreConstants.missionPoint2}</li>
                    <li>{WhoWeAreConstants.missionPoint3}</li>
                    <li>{WhoWeAreConstants.missionPoint4}</li>
                    <li>{WhoWeAreConstants.missionPoint5}</li>
                    <li>{WhoWeAreConstants.missionPoint6}</li>
                </ul>
            </div>

            {/* our history */}
            <div className="history">
                <ImageCrousal />
            </div>

        </div>
    )
}

export default WhoWeAre;