import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import ScrollLink from "../ScrollLink/ScrollLink";
import { AuthContext } from "../../contexts/AuthProvider";
import userImage from "../../assets/images/user.png";
import { NavDropdown } from "react-bootstrap";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  let navLinks;

  const changeNavBg = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        navigate("/sign-in");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

  if (user) {
    navLinks = (
      <>
        <div className="nav-item">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="nav-item">
          <Link to="/posts">Explore Posts</Link>
        </div>
        <div className="nav-item">
          <Link>Profile</Link>
        </div>
      </>
    );
  } else {
    navLinks = (
      <>
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
      </>
    );
  }

  return (
    <div
      className={`nav ${scrollNav ? "toggle-nav-bg" : ""} ${
        user ? "user-nav-bg" : ""
      }`}
    >
      <div className="navbar-container">
        <Link to={user ? "/dashboard" : "/"} className="nav-logo">
          somewhereinblog.com
        </Link>
        <div onClick={toggle} className="mobile-icon">
          <AiOutlineBars />
        </div>
        <ul className="nav-menu">{navLinks}</ul>
        <div className="nav-btn">
          {user ? (
            <div className="user-image">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={
                  <img
                    className="user-image-placeholder"
                    src={user.photoURL ? user.photoURL : userImage}
                    alt=""
                  />
                }
                menuVariant="dark"
              >
                <NavDropdown.Item href="">{user.email}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Profile</NavDropdown.Item>
                <NavDropdown.Item href="">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogOut} href="">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          ) : (
            <Link className="nav-btn-link" to="/sign-in">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
