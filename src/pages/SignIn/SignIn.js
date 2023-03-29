import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { errorMessage } from "../../staticData/authErrors";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState("");
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";

  // email password sign in
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(errorMessage(error.message));
      });
  };

  return (
    <div className="sign-in-container">
      <div className="signin-form-wrap">
        <Link to="/" className="sign-in-logo">
          somewhereinblog.com
        </Link>
        <div className="signin-form-content">
          <form onSubmit={handleSignIn} className="signin-form">
            <h1>Sign In to your account</h1>
            <label className="form-label" htmlFor="for">
              Email
            </label>
            <input
              className="form-input"
              name="email"
              type="email"
              required
              placeholder="E-mail"
            />
            <label className="form-label" htmlFor="for">
              Password
            </label>
            <input
              className="form-input"
              name="password"
              type="password"
              required
              placeholder="Password"
            />
            {error && <span className="error-text">{error}</span>}
            <span className="forgot-pass-text">Forgot Password?</span>
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
