// import React, { useEffect, useState } from "react";
// import "../styles/SignInForm.css"; // Import your CSS file
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { useAuth } from "../authContext/AuthContext";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "../utils/firebase-config.js";

// function SignInForm() {
//   const [mobile, setMobile] = useState();
//   const [password, setPassword] = useState();
//   const [optView, setOptView] = useState(false);
//   const { login, userAuthId } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       auth,
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: function (response) {
//           console.log("Captcha Resolved");
//         },
//         defaultCountry: "IN",
//       }
//     );
//   }, []);

//   const otpSubmit = (e) => {
//     e.preventDefault();

//     let opt_number = e.target.otp_value.value;

//     window.confirmationResult
//       .confirm(opt_number)
//       .then((confirmationResult) => {
//         console.log(confirmationResult);
//         console.log("success");
//         navigate("/home");
//       })
//       .catch((error) => {
//         console.log("couldn't sign in");
//        toast.info("Invalid OTP")
//       });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const response = await axios.post(
//         "http://localhost:5000/api/user/login",
//         { mobile, password }
//       );
//       const data = response.data;
//       login(data.token);
//       userAuthId(data.user._id);

//       e.preventDefault();
//       let phone_number = "+91" + e.target.mobileNumber.value;
//       const appVerifier = window.recaptchaVerifier;
//       signInWithPhoneNumber(auth, phone_number, appVerifier)
//         .then((confirmationResult) => {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           console.log("otp sent");
//           toast.success('Otp sent to Registered Number')
//           window.confirmationResult = confirmationResult;
//           setOptView(true);
//           // ...
//         })
//         .catch((error) => {
//           console.log("SMS Not sent");
//           toast.info("Otp not sent")
//         });
//     } catch (error) {
//       toast.warning("Invalid Credentials");
//       console.log("Error While making it SignIn", error);
//     }
//   };
//   const handleBackChange=()=>{
//     setOptView(false);
//   }

//   return (
//     <div>
//       {optView ? (
//         <div>
//           <h2>Verify OTP</h2>
//           <div className="form-wrapper" onSubmit={otpSubmit}>
//             <form id="otpForm">
//               <div className="input-field">
//                 <label>Enter OTP</label>
//                 <input
//                   type="number"
//                   placeholder="One time password"
//                   name="otp_value"
//                   autoComplete="false"
//                 />
//               </div>
//               <button className="main-button" type="submit">
//                 Verify OTP
//               </button>
//               <button className="back-button" onClick={handleBackChange}>
//                 Back
//               </button>
//             </form>
//           </div>
//           <div id="recaptcha-container"></div>
//         </div>
//       ) : (
//         <div className="container">
//           <h2>Sign In</h2>
//           <ToastContainer />
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <div style={{ display: "flex" }}>
//                 <select
//                   name="countryCode"
//                   id="countryCode"
//                   style={{ width: "25%", marginRight: "10px" }} // Adjust the width as needed
//                 >
//                   <option value="IN">IN(+91)</option>{" "}
//                 </select>
//               </div>
//               <input
//                 type="number"
//                 name="mobileNumber"
//                 id="mobileNumber"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 placeholder="Enter Mobile Number"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter Password"
//                 required
//               />
//             </div>
//             <button type="submit" className="sign-in-button">
//               Sign In
//             </button>
//           </form>
//           <div>
//             <Link to="/forgot"><p>Forgot Password?</p></Link>
//           </div>
//           <div>
//             <Link to="/">
//               <button className="sign-up-button">Sign up</button>
//             </Link>
//           </div>
//           <div id="recaptcha-container"></div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SignInForm;

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
      toast.warning("Invalid Credentials");
      console.log("Error While making it SignIn",error)
  }
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <ToastContainer/>
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
      <Link to="/forgot"><p>Forgot Password?</p></Link>
      </div>
      <div>
        <Link to='/'><button className="sign-up-button">Sign up</button></Link>
      </div>
    </div>
  );
}

export default SignInForm;