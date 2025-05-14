import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const username = e.target.username.value;
        const staySignedIn = e.target.staySignedIn.checked;

        if (username && password) {
            // التبديل لصفحة الـ Dashboard
            navigate("/dashboard/home");
        } else {
            alert("Invalid credentials");
        }
    }


    return (


        <div className="container">
            <h1>Sign In</h1>
            <form id="signInForm" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="input-group">
                    <label>
                        <input type="checkbox" id="staySignedIn" name="staySignedIn" /> Stay Signed In
                    </label>
                </div>
                <button type="submit" className="submit-button">Sign In</button>
            </form>
            <div className="signup-link">
                <p>Don't have an account?  <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>





    )








}
export default Login;