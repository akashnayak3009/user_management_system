import React, { useState } from "react";
import "../styles/SignInForm.css"; // Import your CSS file
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { useAuth } from "../authContext/AuthContext";

function SignInForm() {
 const [mobile,setMobile]= useState();
 const[password, setPassword]=useState();

 const { login, userAuthId } = useAuth();
  const [tokenInput, setTokenInput] = useState('');


 const navigate =useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
      const response = await axios.post("http://localhost:5000/api/user/login",{ mobile, password})
      const data=  response.data;
      console.log(data);
      login(data.token);
      console.log(data.token)
      toast.success("SignIn successfully");
      navigate('/home')
      console.log(data.user._id)
      userAuthId(data.user._id);
  }catch(error){
      toast.warning("Error in SignIN");
      console.log("Error While making it SignIn",error)
  }
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <ToastContainer/>
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
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            placeholder="Enter Mobile Number"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter Password"
            required
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
        <Link to='/'><button className="sign-up-button">Sign up</button></Link>
      </div>
    </div>
  );
}

export default SignInForm;
