import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import ScrollLink from "../ScrollLink/ScrollLink";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggle }) => {
  const [user, setUser] = useState(true);
  let sideLinks;

  if (user) {
    sideLinks = (
      <>
        <Link to="/dashboard">Dashboard</Link>
        <Link>Explore Posts</Link>
        <Link>Profile</Link>
      </>
    );
  } else {
    sideLinks = (
      <>
        <ScrollLink name="Discover" to="discover" toggleFunc={toggle} />
        <ScrollLink name="Latest" to="latest" toggleFunc={toggle} />
        <ScrollLink name="Contact" to="contact" toggleFunc={toggle} />
        <ScrollLink name="Sign Up" to="sign-up" toggleFunc={toggle} />
      </>
    );
  }

  return (
    <div
      onClick={toggle}
      className={`sidebar-container ${isOpen ? "isOpen" : ""}`}
    >
      <div onClick={toggle} className="icon">
        <AiOutlineClose className="close-icon" />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">{sideLinks}</div>
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
