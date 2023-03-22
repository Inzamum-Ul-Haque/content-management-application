import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div
      onClick={toggle}
      className={`sidebar-container ${isOpen ? "isOpen" : ""}`}
    >
      <div onClick={toggle} className="icon">
        <AiOutlineClose className="close-icon" />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <LinkS
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="discover"
            onClick={toggle}
            className="sidebar-link"
          >
            Discover
          </LinkS>
          <LinkS
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="latest"
            onClick={toggle}
            className="sidebar-link"
          >
            Latest
          </LinkS>
          <LinkS onClick={toggle} to="/" className="sidebar-link">
            Contact
          </LinkS>
          <LinkS
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            to="sign-up"
            onClick={toggle}
            className="sidebar-link"
          >
            Sign Up
          </LinkS>
        </div>
        <div className="side-btn-wrap">
          <Link to="/sign-in" className="sidebar-route">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
