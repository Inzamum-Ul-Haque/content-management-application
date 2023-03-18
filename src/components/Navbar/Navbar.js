import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Navbar.css";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = ({ toggle }) => {
  return (
    <div className="nav">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          somewhereinblog.com
        </Link>
        <div onClick={toggle} className="mobile-icon">
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
          <div className="nav-item">
            <LinkS className="nav-links" to="/">
              Sign Up
            </LinkS>
          </div>
        </ul>
        <div className="nav-btn">
          <Link className="nav-btn-link" to="/">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
