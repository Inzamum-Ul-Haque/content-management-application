import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-form-wrap">
        <Link to="/" className="sign-up-logo">
          somewhereinblog.com
        </Link>
        <div className="signup-form-content">
          <form className="signup-form">
            <h1>Create an account</h1>
            <label className="form-label" htmlFor="for">
              Username
            </label>
            <input
              className="form-input"
              type="text"
              required
              placeholder="Type a username"
            />
            <label className="form-label" htmlFor="for">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              required
              placeholder="Type your e-mail"
            />
            <label className="form-label" htmlFor="for">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              required
              placeholder="Enter a password"
            />
            <label className="form-label" htmlFor="for">
              Confirm Password
            </label>
            <input
              className="form-input"
              type="password"
              required
              placeholder="Type your password again"
            />

            <button>Sign Up</button>
            <span className="continue-to-sign-in-text">
              Already have an account? <Link to="/sign-in">Sign In</Link> Now
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
