import React, { useState } from "react";
import "../styles/SignInForm.css"; // Import your CSS file

function SignInForm() {
  const [formData, setFormData] = useState({
    countryCode: "US",
    mobileNumber: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <h4 style={{ color: "orange" }}>OPT has sent to mobile number</h4>
      <form onSubmit={handleSubmit}>
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
            value={formData.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter Mobile Number"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
          />
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
      <div>
        <p>Forgot Password?</p>
      </div>
      <div>
        <button className="sign-up-button">Sign up</button>
      </div>
    </div>
  );
}

export default SignInForm;
