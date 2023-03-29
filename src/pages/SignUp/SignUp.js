import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState("this is error");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="signup-form-wrap">
        <Link to="/" className="sign-up-logo">
          somewhereinblog.com
        </Link>
        <div className="signup-form-content">
          <form onSubmit={handleSignUp} className="signup-form">
            <h1>Create an account</h1>
            <label className="form-label" htmlFor="for">
              Username
            </label>
            <input
              className="form-input"
              name="username"
              type="text"
              required
              placeholder="Type a username"
            />
            <label className="form-label" htmlFor="for">
              Email
            </label>
            <input
              className="form-input"
              name="email"
              type="email"
              required
              placeholder="Type your e-mail"
            />
            <label className="form-label" htmlFor="for">
              Password
            </label>
            <input
              className="form-input"
              name="password"
              type="password"
              required
              placeholder="Enter a password"
            />
            <label className="form-label" htmlFor="for">
              Confirm Password
            </label>
            <input
              className="form-input confirm-pass"
              name="confirmPassword"
              type="password"
              required
              placeholder="Type your password again"
            />
            {error && <span className="error-text">{error}</span>}
            <button type="submit">Sign Up</button>
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
