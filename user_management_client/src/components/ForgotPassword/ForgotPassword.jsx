import React from "react";
import "../../styles/ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="forgot__password">
            <h2>Forgot Password</h2>
            <form>
                <div className="form-group">
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
                        placeholder="Enter Mobile Number"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="sign-in-link">
                New User. <Link to='/'><button>Sign Up</button></Link>
            </div>
            <div className="sign-in-link">
                Already have an account? <Link to='/login'><button>Sign In</button></Link>
            </div>

        </div>
    );
};

export default ForgotPassword;
