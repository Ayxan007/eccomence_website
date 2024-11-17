import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Login(){
    return(
        <div className="container">
            <div className="login-title">
            <h1>Login</h1>
            </div>
            <div className="login">
                <div className="login-email">
                <h4>Email addres</h4>
                <input type="text" placeholder="name@example.com" />
                </div>
                <div className="login-password">
                    <h4>Password</h4>
                    <input type="text" placeholder="Password"/>
                </div>
                <div className="new">
                    <p>New Here?</p>
                    <Link to="/register"><p>Register</p></Link>
                </div>
                <div className="login-btn">
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;