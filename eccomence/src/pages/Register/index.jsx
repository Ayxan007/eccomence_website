import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <div className="register-title">
        <h1>Register</h1>
      </div>
      <div className="register">
        <div className="full-name">
          <h4>Full Name</h4>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div className="register-email">
          <h4>Email addres</h4>
          <input type="text" placeholder="name@example.com" />
        </div>
        <div className="register-password">
          <h4>Password</h4>
          <input type="text" placeholder="Password" />
        </div>
        <div className="already">
          <p>Already has an account? </p>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div>
        <div className="register-btn">
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
