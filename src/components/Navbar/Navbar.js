import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import ScrollLink from "../ScrollLink/ScrollLink";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

  return (
    <div className={`nav ${scrollNav ? "toggle-nav-bg" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          somewhereinblog.com
        </Link>
        <div onClick={toggle} className="mobile-icon">
          <AiOutlineBars />
        </div>
        <ul className="nav-menu">
          <div className="nav-item">
            <ScrollLink name="Discover" to="discover" />
          </div>
          <div className="nav-item">
            <ScrollLink name="Latest" to="latest" />
          </div>
          <div className="nav-item">
            <ScrollLink name="Contact" to="contact" />
          </div>
          <div className="nav-item">
            <ScrollLink name="Sign Up" to="sign-up" />
          </div>
        </ul>
        <div className="nav-btn">
          <Link className="nav-btn-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
