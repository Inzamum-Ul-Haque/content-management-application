import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Navbar.css";
import { AiOutlineBars } from "react-icons/ai";

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
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="nav-links"
              to="discover"
            >
              Discover
            </LinkS>
          </div>
          <div className="nav-item">
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="nav-links"
              to="latest"
            >
              Latest
            </LinkS>
          </div>
          <div className="nav-item">
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="nav-links"
              to="contact"
            >
              Contact
            </LinkS>
          </div>
          <div className="nav-item">
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="nav-links"
              to="sign-up"
            >
              Sign Up
            </LinkS>
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
