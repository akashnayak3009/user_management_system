import React, { useState } from "react";
import "../styles/SignupForm.css";
const calculatePasswordStrength = (password) => {
    return password.length * 10;
};

const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
};

const SignupForm = () => {
    const [formData, setFormData] = useState({
        countryCode: "",
        mobileNumber: "",
        name: "",
        email: "",
        password: "",
    });

    const [passwordStrength, setPasswordStrength] = useState(0);

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        mobileNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === "password") {
            const strength = calculatePasswordStrength(value);
            // Ensure the strength is not more than 100
            const clampedStrength = Math.min(strength, 100);
            setPasswordStrength(clampedStrength);
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            errors.email = "Invalid email format";
        }

        if (!formData.password) {
            errors.password = "Password is required";
        }

        if (!formData.mobileNumber) {
            errors.mobileNumber = "Mobile number is required";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Handle form submission, e.g., send the data to your server for registration.
        }
    };

    return (
        <div className="signup-container">
            <h2>Registration Form</h2>
            <h4 style={{ color: "orange" }}>Otp has sent your mobile number</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group" id="mobile__country">
                    <div style={{ display: "flex" }}>
                        <select
                            name="countryCode"
                            id="countryCode"
                            style={{ width: "25%", marginRight: "10px" }} // Adjust the width as needed
                        >
                            <option value="IN">IN(+91)</option>{" "}
                            {/* Simplified the country name */}
                            {/* Add more country options here */}
                        </select>
                    </div>
                    <input
                        type="number"
                        name="mobileNumber"
                        id="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter Mobile Number"
                    />
                </div>
                <div className="error-message">{errors.mobileNumber}</div>

                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Full Name"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email Address"
                    />
                </div>
                <div className="error-message">{errors.email}</div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password here"
                    />
                </div>
                <div className="error-message">{errors.password}</div>
                <div className="password-strength">
                    <progress max="100" value={passwordStrength} />
                </div>
                <div className="strength-text">
                    Password Strength: {passwordStrength}%
                </div>

                <div className="form-group">
                    <label>
                        <input type="checkbox" name="agreeToTerms" id="agreeToTerms" /> I
                        agree to the terms and conditions
                    </label>
                </div>

                <button type="submit">Sign Up</button>
            </form>

            <div className="sign-in-link">
                Already have an account? <button>Sign In</button>
            </div>
        </div>
    );
};

// Add utility functions for validation (e.g., isValidEmail and calculatePasswordStrength)

export default SignupForm;
