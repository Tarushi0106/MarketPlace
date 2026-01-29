import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./assets/shaurya-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ onIndustryClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔄 check auth on route change
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      
      {/* LEFT */}
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Shaurya Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><span>Cloud & Infrastructure</span></li>
          <li><span>Business Applications</span></li>
          <li><span>Cybersecurity</span></li>
          <li><span>Data, AI & Intelligence</span></li>

          <li onClick={onIndustryClick} className="industry-link">
            <span>Industry Solutions</span>
          </li>

          <li><span>Get Pricing</span></li>
        </ul>
      </div>

      {/* RIGHT – AUTH */}
      <div className="navbar-right">
        {!isLoggedIn ? (
          <>
            <button
              className="nav-btn-outline"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="nav-btn-primary"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </>
        ) : (
          <button
            className="nav-btn-outline"
            onClick={logout}
          >
            Sign Out
          </button>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
