import React from "react";
import { Link } from "react-router-dom";
import "./SignUpSection.css";
import Lottie from "react-lottie";
import { LottieOptions } from "../../../staticData/lottieOptions";

const SignUpSection = () => {
  return (
    <div id="sign-up" className="signup-section-container">
      <div className="signup-section-wrapper">
        <div className="signup-section-right">
          <div className="right-content">
            <h1>Create an Account</h1>
            <p>
              Create and make your content visible with others, browse content
              for knowledge and share yours free of cost
            </p>
            <div className="signup-btn">
              <Link className="signup-btn-link" to="/sign-up">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="signup-section-left">
          <div className="left-content">
            <div className="card-wrapper">
              <div className="card-content">
                <div className="face front">
                  <Lottie options={LottieOptions[0]} width={450} height={450} />
                </div>
                <div className="face back">
                  <Lottie options={LottieOptions[1]} width={450} height={450} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
