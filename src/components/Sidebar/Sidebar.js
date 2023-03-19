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
          <LinkS onClick={toggle} to="/" className="sidebar-link">
            Discover
          </LinkS>
          <LinkS onClick={toggle} to="/" className="sidebar-link">
            About
          </LinkS>
          <LinkS onClick={toggle} to="/" className="sidebar-link">
            Contact
          </LinkS>
          <LinkS onClick={toggle} to="/" className="sidebar-link">
            Sign Up
          </LinkS>
        </div>
        <div className="side-btn-wrap">
          <Link to="/" className="sidebar-route">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
