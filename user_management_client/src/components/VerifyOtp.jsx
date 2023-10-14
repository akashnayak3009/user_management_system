import { useState } from "react";
import '../styles/VerifyOtp.css'


const VerifyOtp=() => {
    const [otp, setOTP] = useState(['', '', '', '']); // Create an array to store OTP digits
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleOTPChange = (e, index) => {
    const value = e.target.value;

    // Ensure that the value is a single digit
    if (/^[0-9]$/.test(value) || value === '') {
      // Create a copy of the OTP array and update the specified index
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);
    }
  };

  const handleVerification = () => {
    const enteredOTP = otp.join(''); // Combine the OTP digits

    // You can add your verification logic here.
    // For a simple example, we'll compare the entered OTP with a hardcoded value.
    const correctOTP = '1234';

    if (enteredOTP === correctOTP) {
      setVerificationStatus('Verification successful!');
    } else {
      setVerificationStatus('Verification failed. Please try again.');
    }
  };
    return (
        <div className="otp-verification">
        <h1>OTP Verification</h1>
        <h3>Enter OTP sent to registered mobile</h3>
        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              placeholder="0"
              value={digit}
              onChange={(e) => handleOTPChange(e, index)}
              className="otp-input"
            />
          ))}
        </div>
        <div>
            <p>Resend OTP in 12 sec</p>
        </div>
        <button onClick={handleVerification} className="verify-button">
          Verify OTP
        </button>
        <p className="verification-status">{verificationStatus}</p>
      </div>
      
    );
  }
  
  export default VerifyOtp;
  