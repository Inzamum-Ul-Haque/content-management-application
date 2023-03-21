import React from "react";
import { Link } from "react-router-dom";
import "./SignUpSection.css";

const SignUpSection = () => {
  return (
    <div className="signup-section-container">
      <div className="signup-section-wrapper">
        <div className="signup-section-left">
          <div className="left-content">
            <div className="card">
              <div className="face front">
                <h1>Front</h1>
              </div>
              <div className="face back">
                <h1>Back</h1>
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
