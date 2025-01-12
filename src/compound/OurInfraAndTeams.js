import React, { useState } from "react";
import CardType2 from "../atom/CardType2";
import { OurInfraAndTeam } from "../constant";
import prePress from "../atom/images/pre-press.jpg";
import offSet from "../atom/images/offSet.jpg";
import binding from "../atom/images/binding.jpg";
import "./css/OurInfraAndTeams.style.css";
import Hover from "../atom/Hover";
import { useSelector, useDispatch } from 'react-redux';
import MobileNavTabs from '../atom/MobileNavTabs';
import ContactUs from "./ContactUs";

const OurInfraAndTeams = () => {
  const [isHoverForPrePress, setIsHoverrPrePress] = useState(false);
  const [isHoverForOffset, setIsHoverForOffset] = useState(false);
  const [isHoverForBinding, setIsHoverForBinding] = useState(false);
  const showMobileTab = useSelector((state) =>  state.showHideMobileNavBar )

  let prePressMachine = [
    "CTP Kodak 800 III",
    "CTP Screen 800",
    "CTP Epson Sure color SC-B6070 Printer",
    "1-5",
    "1-7",
    "HP Scanjet 3570c A-4 Size Flatbed Scanner",
    ,
    "HP 5370c A-4 Size Flatbed Scanner",
    "HP Laser Print 1200 Series",
    "HP Colour LaserJet 5550hdn Printer",
    "Memory Printing Down Frame",
    "Memory Plate Processor",
    "Memory Camera",
    "Memory Contactor",
  ];

  let OffsetMachine = [
    "Five Colour Heidelberg with Coater",
    "Four Colour RMGT 920 ST",
    "Four Colour CD Heidelberg",
    "Four Colour SM 102-4P Heidelberg",
    "1 Col. Heidelberg (SORK) with Auto Numbering",
    "1 Col. Heidelberg",
  ];

  let bindingMachine = [
    "Fully Computerized Polar Cutting Machine",
    "Fully Computerized Polar Cutting Machine",
    "Folding Machine Fully Automatic (Heidelberg)",
    "Folding Machine Fully Automatic",
    "Perfect Binding Machine (Single Clamp)",
    "Perfect Binding Machine (Six Clamp)",
    "Punching Machine for Spiral & Wire-O",
    "Wire-O Press Machine",
    "Tin Mounting Machine (Manual)",
    "Case Making Machine",
    "Sewing Machine Fully Automatic (Aster)",
    "Section Sewing Polygraph (4 Niddles)",
    "Section Sewing (Manual)",
    "Perforation Machine",
    "Saddle Stitching Machine",
    "Press Machine",
    "Screen Tables",
    "Shrink Packing Machine",
    "Lamination Machine (Thermal)",
    "Lamination Machine (Normal+ Thermal)",
    "Nipping Machine (TAKHI)",
    "Bundling/Box Strapping Machine",
  ];

  return (
    <>
    <div className="InfraAndTeam">
      {showMobileTab && <MobileNavTabs />}
      <span className="InfraAndTeam-heading">{OurInfraAndTeam.heading}</span>

      <div className="InfraAndTeam-machine">
        <div
          className="InfraAndTeam-prePress"
          onMouseEnter={() => setIsHoverrPrePress(true)}
          onMouseLeave={() => setIsHoverrPrePress(false)}
        >
          <CardType2 heading="Pree Press Machines" image={prePress} />
          {isHoverForPrePress && <Hover machineList={prePressMachine} isVisible={isHoverForPrePress} />}
        </div>

        <div
          className="InfraAndTeam-offSet"
          onMouseEnter={() => setIsHoverForOffset(true)}
          onMouseLeave={() => setIsHoverForOffset(false)}
        >
          <CardType2 heading="Offset Sheeted Machine" image={offSet} />
          {isHoverForOffset && <Hover machineList={OffsetMachine} isVisible={isHoverForOffset}/>}
        </div>

        <div
          className="InfraAndTeam-Binding"
          onMouseEnter={() => setIsHoverForBinding(true)}
          onMouseLeave={() => setIsHoverForBinding(false)}
        >
          <CardType2 heading="Binding Post Printing Machine" image={binding} />
          {isHoverForBinding && <Hover machineList={bindingMachine} isVisible={isHoverForBinding}/>}
        </div>
      </div>
    </div>
    </>
  );
};

export default OurInfraAndTeams;
