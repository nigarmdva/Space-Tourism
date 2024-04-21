import React from "react";
import europaImage from "./Europa.png";
import { NavLink } from "react-router-dom";
import "./All.css";
const Europa = () => {
  return (
    <>
      <div className="all">
        <div className="all-main">
          <div className="all-img">
            <img src={europaImage} alt="Europa" className="rotate" />
          </div>
          <div className="all-text">
          <ul className="navigation-menu">
              <li>
                <NavLink to="/destination/moon">Moon</NavLink>
              </li>
              <li>
                <NavLink to="/destination/mars">Mars</NavLink>
              </li>
              <li>
                <NavLink to="/destination/titan">Titan</NavLink>
              </li>
              <li>
                <NavLink to="/destination/europa">Europa</NavLink>
              </li>
            </ul>
            <h1>EUROPA</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr />
            <div id="end">
              <div id="end-divs">
                <span>avg. distance</span>
                <p>384,400 km</p>
              </div>
              <div id="end-divs">
                <span>est. travel time</span>
                <p>3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Europa;
