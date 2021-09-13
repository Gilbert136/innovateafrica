import React from 'react'
import "./Login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Innovate Africa</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Innovate Africa.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="Email" className="loginInput" placeholder="Email" />
                        <input type="Password" className="loginInput" placeholder="Password" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}