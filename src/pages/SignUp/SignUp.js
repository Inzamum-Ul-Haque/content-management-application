import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { errorMessage } from "../../staticData/authErrors";
import "./SignUp.css";

const SignUp = () => {
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [signupError, setSignupError] = useState("");
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // email password sign up
  const handleSignUp = (data) => {
    setPasswordMatchError("");
    setSignupError("");

    if (data.password !== data.confirmPassword) {
      setPasswordMatchError("Password do not match");
      return;
    }

    signInUser(data.email, data.password)
      .then((result) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        setSignupError(errorMessage(error.message));
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-wrap">
        <Link to="/" className="sign-up-logo">
          somewhereinblog.com
        </Link>
        <div className="signup-form-content">
          <form onSubmit={handleSubmit(handleSignUp)} className="signup-form">
            <h1>Create an account</h1>
            <div className="input-container">
              <label className="form-label" htmlFor="for">
                Username
              </label>
              <input
                className="form-input"
                {...register("username", {
                  required: "Please give a username",
                })}
                type="text"
                placeholder="Type a username"
              />
              {errors.username && (
                <span className="error-text">{errors.username.message}</span>
              )}
            </div>
            <div className="input-container">
              <label className="form-label" htmlFor="for">
                Email
              </label>
              <input
                className="form-input"
                {...register("email", {
                  required: "Please enter your e-mail",
                })}
                type="email"
                placeholder="Type your e-mail"
              />
              {errors.email && (
                <span className="error-text">{errors.email.message}</span>
              )}
            </div>
            <div className="input-container">
              <label className="form-label" htmlFor="for">
                Password
              </label>
              <input
                className="form-input"
                {...register("password", {
                  required: "Please provide password",
                })}
                type="password"
                placeholder="Enter a password"
              />
              {errors.password && (
                <span className="error-text">{errors.password.message}</span>
              )}
            </div>
            <div className="input-container">
              <label className="form-label" htmlFor="for">
                Confirm Password
              </label>
              <input
                className="form-input"
                {...register("confirmPassword", {
                  required: "Please confirm password",
                })}
                type="password"
                placeholder="Type your password again"
              />
              {errors.confirmPassword && (
                <span className="error-text">
                  {errors.confirmPassword.message}
                </span>
              )}
              {passwordMatchError && (
                <span className="error-text">{passwordMatchError}</span>
              )}
            </div>
            <button type="submit">Sign Up</button>
            {signupError && <span className="error-text">{signupError}</span>}
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
