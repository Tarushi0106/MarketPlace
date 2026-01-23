import React from "react";
import "./Navbar.css";
import logo from "./assets/shaurya-logo.png";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Shaurya Logo" className="navbar-logo" />
      </div>

     <ul className="navbar-links">
  <li><Link to="/">Marketplace</Link></li>
  <li><Link to="/products">Products</Link></li>
  <li>DTH</li>
  <li>Bill Payments</li>
  <li>AEPS</li>
  <li>APIs</li>
  <li>E-Commerce</li>
</ul>

      <div className="navbar-right">
        <button className="nav-btn-outline">Login</button>
        <button className="nav-btn-primary">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
