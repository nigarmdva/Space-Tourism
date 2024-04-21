import React from "react";
import "./Technology.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const Technology = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("launch");
  }, []);
  return (
    <>
      <div id="tech">
        <div className="container">
          <div id="dest_text">
            <span>03</span>
            <h2>space launch 101</h2>
          </div>
          <div id="routes">
            <NavLink to={"launch"} className="launch-link"></NavLink>
            <NavLink to={"capsule"} className="capsule-link"></NavLink>
            <NavLink to={"spaceport"} className="spaceport-link"></NavLink>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
