import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="form-wrap">
        <Link to="/" className="sign-in-logo">
          somewhereinblog.com
        </Link>
        <div className="form-content">
          <form className="signin-form">
            <h1>Sign In to your account</h1>
            <label className="form-label" htmlFor="for">
              Email
            </label>
            <input className="form-input" type="email" required />
            <label className="form-label" htmlFor="for">
              Password
            </label>
            <input className="form-input" type="password" required />
            <button>Continue</button>
            <span>Forgot Password?</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
