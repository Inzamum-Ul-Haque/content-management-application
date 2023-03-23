import React from "react";
import "./Discover.css";
import DiscoverImage from "../../../assets/images/discover-img.svg";
import ScrollLink from "../../../components/ScrollLink/ScrollLink";

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
            <ScrollLink name="Get Started" to="home" />
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
