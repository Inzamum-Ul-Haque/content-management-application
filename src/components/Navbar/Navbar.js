import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Navbar.css";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          somewhereinblog.com
        </Link>
        <div className="mobile-icon">
          <AiOutlineBars />
        </div>
        <ul className="nav-menu">
          <div className="nav-item">
            <LinkS className="nav-links" to="/">
              Discover
            </LinkS>
          </div>
          <div className="nav-item">
            <LinkS className="nav-links" to="/">
              About
            </LinkS>
          </div>
          <div className="nav-item">
            <LinkS className="nav-links" to="/">
              Contact
            </LinkS>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
