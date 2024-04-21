import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Destination.css";

export const Destination = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("moon");
  }, []); 

  return (
    <div className="dest">
      <div className="container">
        <div id="dest_text">
          <span>01</span>
          <h2>pick your destination</h2>
        </div>
        <div id="roots">
          <Link to={"moon"} className="moon-link"></Link>
          <Link to={"mars"} className="mars-link"></Link>
          <Link to={"titan"} className="titan-link"></Link>
          <Link to={"europa"} className="europa-link"></Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
