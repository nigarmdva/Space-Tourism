import React from "react";
import hourleyImage from "./hourley.png";
import { NavLink } from "react-router-dom";
import "./CrewAll.css";
const Hourley = () => {
  return (
    <>
      <div id="crewAll">
        <img src={hourleyImage} alt="hourley" />
        <div className="crew-text">
          <div className="navigation-menu">
            <NavLink to="/crew/hourley">
              <div id="a"></div>
            </NavLink>

            <NavLink to="/crew/mark">
              <div id="a"></div>
            </NavLink>

            <NavLink to="/crew/victor">
              <div id="a"></div>
            </NavLink>

            <NavLink to="/crew/ansari">
              <div id="a"></div>
            </NavLink>
          </div>
          <div className="crew-foot">
            <h3>Commander</h3>
            <h1>douglas hurley</h1>
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

export default Hourley;
