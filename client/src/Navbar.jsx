import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./assets/shaurya-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ onIndustryClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = () => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  };

  useEffect(() => {
    checkAuth();
  }, [location.pathname]); // 🔥 re-check on route change

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
          <li>Cloud & Infrastructure</li>
          <li>Business Applications</li>
          <li>Cybersecurity</li>
          <li>Data, AI & Intelligence</li>

          <li onClick={onIndustryClick} className="industry-link">
            Industry Solutions
          </li>

          <li>Pricing</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* RIGHT */}
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
             Sign in
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
