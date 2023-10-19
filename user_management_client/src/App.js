
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import SignupForm from './components/SignupForm'
import SignInForm from './components/SignInForm'
import Home from './pages/Home'
import VerifyOtp from './components/VerifyOtp'
import UpdateForm from './components/UpdateForm'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import NotFound from './components/NotFound';
import { useAuth } from './authContext/AuthContext';
import { PrivateRoute, ProtectRoute } from './utils/PrivateRoute';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignupForm/>}/>
        <Route exact path="/login" element={<SignInForm/>}/>
        <Route path="/home" element={<PrivateRoute />}  />
        <Route path="/update" element={<ProtectRoute />} />
        <Route exact path="/verify" element={<VerifyOtp/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/forgot" element= {<ForgotPassword/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
