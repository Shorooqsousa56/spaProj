import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [isStudent, setIsStudent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const universityId = e.target.universityId?.value || null;

        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Is Student:", isStudent);
        console.log("University ID:", universityId);
    };

    const handleStudentCheck = (e) => {
        setIsStudent(e.target.checked);
    };

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form id="signUpForm" onSubmit={handleSubmit}>
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
                        <input
                            type="checkbox"
                            id="isStudent"
                            onChange={handleStudentCheck}
                        />
                        I am a student
                    </label>
                </div>

                {isStudent && (
                    <div className="input-group" id="universityIdGroup">
                        <label htmlFor="universityId">University ID</label>
                        <input type="text" id="universityId" name="universityId" />
                    </div>
                )}

                <button type="submit" className="submit-button">Sign Up</button>
            </form>

            <div className="signin-link">
                <p>Already have an account? <Link to="/">Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
