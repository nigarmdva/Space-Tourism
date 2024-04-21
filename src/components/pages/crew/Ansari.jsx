import React from "react";
import ansariImage from "./ansari.png";
import { NavLink } from "react-router-dom";
import "./CrewAll.css";
const Ansari = () => {
  return (
    <>
      <div id="crewAll">
        <img src={ansariImage} alt="ansari" />
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
            <h3>flight engineer</h3>
            <h1>Anshousheh ansari</h1>
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

export default Ansari;
