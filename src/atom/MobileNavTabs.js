import React, { useEffect, useState } from "react";
import "./css/MobileNavTabs.style.css";
import { NavLink } from "react-router-dom";

const MobileNavTabs = () => {
  const [activeTab, setACtiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="SideMobileNavTab">
      <ul>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive";
            }}
            to="/WhoWeAre"
            onClick={() => setACtiveTab(1)}
          >
            Who we are
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={(e) => {
              return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive";
            }}
            to="/WhatWeDo"
            onClick={() => setACtiveTab(2)}
          >
            What we do
          </NavLink>
        </li>
        {/* <li>Services we offer</li> */}
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive";
            }}
            to="/OurClient"
            onClick={() => setACtiveTab(3)}
          >
            Our Clients
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(e) => {
              return e.isActive ? "nav-tab-li-active" : "nav-tab-li-inactive";
            }}
            to="/OurInfraAndTeams"
            onClick={() => setACtiveTab(4)}
          >
            Our Infrastructure and Machine
          </NavLink>
        </li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default MobileNavTabs;
