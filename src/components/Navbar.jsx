import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src="../../images/icon.png" alt="" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/"><span>00</span> Home</NavLink>
        </li>
        <li>
          <NavLink to="/destination"><span>01</span>Destination</NavLink>
        </li>
        <li>
          <NavLink to="/crew"><span>02</span>Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology"><span>03</span>Technology</NavLink>
        </li>
      </ul>
    </nav>
  );
};