import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { errorMessage } from "../../staticData/authErrors";
import "./SignIn.css";

const SignIn = () => {
  const [signInError, setSignInError] = useState("");
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const from = location.state?.from?.pathname || "/dashboard";

  // email password sign in
  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setSignInError(errorMessage(error.message));
      });
  };

  return (
    <div className="sign-in-container">
      <div className="signin-form-wrap">
        <Link to="/" className="sign-in-logo">
          somewhereinblog.com
        </Link>
        <div className="signin-form-content">
          <form onSubmit={handleSubmit(handleSignIn)} className="signin-form">
            <h1>Sign In to your account</h1>
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
                placeholder="E-mail"
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
                  required: "Please enter your password",
                })}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <span className="error-text">{errors.password.message}</span>
              )}
              {signInError && <span className="error-text">{signInError}</span>}
              <span className="forgot-pass-text">Forgot Password?</span>
            </div>
            <button type="submit" className="signin-btn">
              Continue
            </button>
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
