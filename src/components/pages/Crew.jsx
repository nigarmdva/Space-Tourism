import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { useEffect } from "react";

import "./Crew.css";

export const Crew = () => {
  const navigate = useNavigate();
  

    React.useEffect(() => {
      navigate("hourley");
    }, []);
  return (
    <div className="crew">
      <div className="container">
        <div id="crew_text">
          <span>02</span>
          <h2>Meet your crew</h2>
        </div>
        <div id="routes">
          <NavLink to={"hourley"} className="hourley-link"></NavLink>
          <NavLink to={"mark"} className="mark-link"></NavLink>
          <NavLink to={"victor"} className="victor-link"></NavLink>
          <NavLink to={"ansari"} className="ansari-link"></NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
