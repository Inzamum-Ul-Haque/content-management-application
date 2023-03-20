import React from "react";
import "./Discover.css";
import DiscoverImage from "../../../assets/images/discover-img.svg";
import { Link as LinkS } from "react-scroll";

const Discover = () => {
  return (
    <div id="discover" className="discover-container">
      <div className="discover-wrapper">
        <div className="discover-text-content">
          <h1>Unlimited content creation for innovative people</h1>
          <p>
            Create and make your content visible with others, browse content for
            knowledge and share yours free of cost
          </p>
          <div className="discover-btn">
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="discover-btn-link"
              to="home"
            >
              Get Started
            </LinkS>
          </div>
        </div>
        <div className="discover-img">
          <img src={DiscoverImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discover;
