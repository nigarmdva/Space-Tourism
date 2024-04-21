import React from "react";
import capsuleImage from "./capsule.png";
import { NavLink } from "react-router-dom";
import "./Tech.css";
const Capsule = () => {
  return (
    <>
      <div id="crewAll">
        <img src={capsuleImage} alt="capsule" />
        <div className="crew-text">
          <div className="navigation-menu">
            <NavLink to="/technology/launch">
              <div id="a">1</div>
            </NavLink>

            <NavLink to="/technology/spaceport">
              <div id="a">2</div>
            </NavLink>

            <NavLink to="/technology/capsule">
              <div id="a">3</div>
            </NavLink>
          </div>
          <div className="crew-foot">
            <h3>The terminology</h3>
            <h1>Space Capsule</h1>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capsule;
