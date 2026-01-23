import React from "react";
import "./Footer.css";
import logo from "./assets/shaurya-logo.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Shaurya Logo" />
          <p>
            Shaurya Teleservices is a unified digital marketplace for telecom,
            payments, APIs and digital services.
          </p>
        </div>

        <div className="footer-col">
          <h4>Marketplace</h4>
          <ul>
            <li>Mobile Recharge</li>
            <li>DTH</li>
            <li>Bill Payments</li>
            <li>AEPS</li>
            <li>Money Transfer</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Developers</h4>
          <ul>
            <li>APIs</li>
            <li>Documentation</li>
            <li>Sandbox</li>
            <li>Status</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shaurya Teleservices. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
