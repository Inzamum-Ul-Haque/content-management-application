import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="signin-form-wrap">
        <Link to="/" className="sign-in-logo">
          somewhereinblog.com
        </Link>
        <div className="signin-form-content">
          <form className="signin-form">
            <h1>Sign In to your account</h1>
            <label className="form-label" htmlFor="for">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              required
              placeholder="E-mail"
            />
            <label className="form-label" htmlFor="for">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              required
              placeholder="Password"
            />
            <span className="forgot-pass-text">Forgot Password?</span>
            <Link className="signin-btn" to="/dashboard">
              Continue
            </Link>
            <span className="continue-to-sign-up-text">
              Don't have an account? <Link to="/sign-up">Sign Up</Link> Now
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
