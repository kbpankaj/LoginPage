import React from "react";

const LoginPage = () => {
    return (
        <div className="container">
            <div className="loginPage">
                <h1>Login</h1>

                <div className="loginDetails">
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                </div>

                <div className="password">
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <p>Forgot password ?</p>
                </div>
                <button>Log In</button>
            </div>
        </div>
    );
};

export default LoginPage;
