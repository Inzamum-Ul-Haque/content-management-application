import React from "react";
import { Link } from "react-router-dom";
import "./SignUpSection.css";
import Lottie from "react-lottie";
import { defaultOptions } from "../../../staticData/LottieOptions";

const SignUpSection = () => {
  return (
    <div id="sign-up" className="signup-section-container">
      <div className="signup-section-wrapper">
        <div className="signup-section-left">
          <div className="left-content">
            <div className="card">
              <div className="face front">
                <Lottie options={defaultOptions[0]} width={450} height={450} />
              </div>
              <div className="face back">
                <Lottie options={defaultOptions[1]} width={450} height={450} />
              </div>
            </div>
          </div>
        </div>
        <div className="signup-section-right">
          <div className="right-content">
            <h1>Create an Account</h1>
            <p>
              Create and make your content visible with others, browse content
              for knowledge and share yours free of cost
            </p>
            <div className="signup-btn">
              <Link className="signup-btn-link" to="/">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
