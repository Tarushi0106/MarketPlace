import React from "react";
import "./Navbar.css";
import logo from "./assets/shaurya-logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ onIndustryClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Shaurya Logo" className="navbar-logo" />
      </div>

      <ul className="navbar-links">
 
            <li>Cloud & Infrastructure</li>
        <li>Business Applications</li>
        <li>Workplace & Colloboration</li>
        <li>CybersecurityAcronis Cyber Security</li>

        {/* 👇 THIS IS THE IMPORTANT PART */}
        <li> Data, AI & Intelligence
        </li>

        <li>Industry Solutions</li>
        <li>Get pricing</li>
      </ul>

      <div className="navbar-right">
        <button className="nav-btn-outline">Login</button>
        <button className="nav-btn-primary">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;