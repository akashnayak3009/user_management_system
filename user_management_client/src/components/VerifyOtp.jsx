import React, { useState } from 'react';
import OTPInput from 'otp-input-react';
import '../styles/VerifyOtp.css'; // Import your CSS file
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const VerifyOtp = () => {

 

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // onSignInSubmit();
  }
});
  const [otp, setOtp] = useState('');

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your OTP verification logic here
    // For demonstration purposes, we'll just log the OTP value for now
    console.log('OTP submitted:', otp);
  };

  return (
    <div className="verify-otp-container">
      <div>
      <h2>Login Form</h2>
        <form>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required/>
          <button type="submit">Submit</button>
        </form>
      </div>

      <h2>Verify OTP</h2>
      <form className="verify-otp-form" onSubmit={handleSubmit}>
        <label htmlFor="otp" className="verify-otp-label">
          Enter OTP:
        </label>
        <OTPInput
          value={otp}
          onChange={handleOtpChange}
          inputClassName="otp-input" // Apply the OTP input class
          inputMode="numeric"
          autoFocus
          numInputs={6} // Assuming OTPs are 6 characters long
        />
        <button type="submit" className="verify-button">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;


// import React, { useState } from 'react';
// import OTPInput from 'otp-input-react';
// import '../styles/VerifyOtp.css'; // Import your CSS file

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState('');

//   const handleOtpChange = (value) => {
//     setOtp(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add your OTP verification logic here
//     // For demonstration purposes, we'll just log the OTP value for now
//     console.log('OTP submitted:', otp);
//   };

//   return (
//     <div className="verify-otp-container">
//       <h2>Verify OTP</h2>
//       <form className="verify-otp-form" onSubmit={handleSubmit}>
//         <label htmlFor="otp" className="verify-otp-label">
//           Enter OTP:
//         </label>
//         <OTPInput
//           value={otp}
//           onChange={handleOtpChange}
//           inputClassName="otp-input" // Apply the OTP input class
//           inputMode="numeric"
//           autoFocus
//           numInputs={6} // Assuming OTPs are 6 characters long
//         />
//         <button type="submit" className="verify-button">
//           Verify
//         </button>
//       </form>
//     </div>
//   );
// };

// export default VerifyOtp;
