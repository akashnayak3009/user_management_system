import React, { useState } from "react";
import "../styles/SignupForm.css";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const calculatePasswordStrength = (password) => {
    return password.length * 10;
};

const SignupForm = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [passwordStrength, setPasswordStrength] = useState(0);

    const navigate = useNavigate();

    const handleMobileChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        const truncatedValue = numericValue.slice(0, 10);
    
        // Check if the input contains non-digit characters
        if (inputValue !== numericValue) {
          toast.info('Mobile number must contain only digits.');
        } 
    
        setMobile(truncatedValue);
      };

    const passWordChange = (e) => {
        setPassword(e.target.value);
        const { name, value } = e.target;
        if (name === "password") {
            const strength = calculatePasswordStrength(value);
            // Ensure the strength is not more than 100
            const clampedStrength = Math.min(strength, 100);
            setPasswordStrength(clampedStrength);
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
            const response = await axios.post("http://localhost:5000/api/user/create",{email, username, mobile, password})
            toast.success("SignUp successfully");
            const data=  response.data;
            console.log(data);
            toast.success("SignUp successfully");
            navigate('/login')
        }catch(error){
            toast.warning("Unique credentials required");
            console.log("Error While making it post",error)
        }
    };
    return (
        <div className="signup-container">
            <ToastContainer/>
            <h2>Registration Form</h2>
            <h4 style={{ color: "orange" }}>Otp has sent your mobile number</h4>
            <form onSubmit={e=>handleSubmit(e)}>
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
                        type="text"
                        name="mobileNumber"
                        id="mobileNumber"
                        value={mobile}
                        onChange={handleMobileChange}
                        placeholder="Enter Mobile Number"
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        placeholder="Enter Full Name"
                        
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter Email Address"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={passWordChange}
                        placeholder="Enter Password here"
                        required
                    />
                </div>
                <div className="password-strength">
                    <progress max="100" value={passwordStrength} />
                </div>
                <div className="strength-text">
                    Password Strength: {passwordStrength}%
                </div>

                <div className="form-group">
                    <label>
                        <input type="checkbox" name="agreeToTerms" id="agreeToTerms" required /> I
                        agree to the terms and conditions
                    </label>
                </div>

                <button type="submit">Sign Up</button>
            </form>

            <div className="sign-in-link">
                Already have an account?<Link to='/login'><button>Sign In</button></Link>
            </div>
        </div>
    );
};

// Add utility functions for validation (e.g., isValidEmail and calculatePasswordStrength)

export default SignupForm;
