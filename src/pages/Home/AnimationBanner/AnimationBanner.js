import React, { useState } from "react";
import "./AnimationBanner.css";
import Video from "../../../assets/videos/video.mp4";
import { Link } from "react-router-dom";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

const AnimationBanner = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="hero-container">
      <div className="hero-bg">
        <video
          className="video-bg"
          autoPlay
          loop
          muted
          type="video/mp4"
          src={Video}
        ></video>
      </div>
      <div className="hero-content">
        <h1>Create and Share Content</h1>
        <p>
          Sign up for a new account today, create video blogs, content blogs and
          share them.{" "}
        </p>
        <div className="hero-btn-wrapper">
          <Link
            className="hero-btn-link"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="/"
          >
            <span>Get Started</span>{" "}
            {hover ? <MdKeyboardArrowRight /> : <MdArrowForward />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimationBanner;
