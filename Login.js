import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      
      {/* LEFT SIDE */}
      <div className="left">
        <h2>Welcome back</h2>
        <p>Please enter your details</p>

        <label>Email address</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <div className="options">
          <div>
            <input type="checkbox" /> Remember for 30 days
          </div>
          <a href="#">Forgot password</a>
        </div>

        <button className="login-btn">Sign in</button>

        <button className="google-btn">
          Sign in with Google
        </button>

        <p className="signup">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <h1>✨</h1>
      </div>

    </div>
  );
}

