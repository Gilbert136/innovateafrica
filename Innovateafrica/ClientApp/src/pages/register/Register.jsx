import React from 'react'
import "./Register.css"

export default function Register() {
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
                        <input type="Text" className="loginInput" placeholder="Username" />
                        <input type="Email" className="loginInput" placeholder="Email" />
                        <input type="Password" className="loginInput" placeholder="Password" />
                        <input type="Password" className="loginInput" placeholder="Password Again" />
                        <button className="loginButton">Sign Up</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}