import React from "react";
import "./Navbar.css";
import logo from "./assets/shaurya-logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ onIndustryClick }) => {
  return (
    <nav className="navbar">
      
      {/* Left Section - Logo */}
      <div className="navbar-left">
        <Link to="/">
          <img 
            src={logo} 
            alt="Shaurya Logo" 
            className="navbar-logo" 
          />
        </Link>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="navbar-center">
        <ul className="navbar-links">
          
          <li>
            <span>Cloud & Infrastructure</span>
          </li>
          
          <li>
            <span>Business Applications</span>
          </li>
{/*           
          <li>
            <span>Workplace & Collaboration</span>
          </li> */}
          
          <li>
            <span>Cybersecurity</span>
          </li>
          
          <li>
            <span>Data, AI & Intelligence</span>
          </li>
          
          <li 
            onClick={onIndustryClick} 
            className="industry-link"
          >
            <span>Industry Solutions</span>
          </li>
          
          <li>
            <span>Get Pricing</span>
          </li>
          
        </ul>
      </div>

      {/* Right Section - Action Buttons */}
      <div className="navbar-right">
        
        <button className="nav-btn-outline">
          Login
        </button>
        
        <button className="nav-btn-primary">
          Get Started
        </button>
        
      </div>
      
    </nav>
  );
};

export default Navbar;