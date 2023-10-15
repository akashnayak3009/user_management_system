
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupForm from './components/SignupForm'
import SignInForm from './components/SignInForm'
import Home from './pages/Home'
import VerifyOtp from './components/VerifyOtp'
import UpdateForm from './components/UpdateForm'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignupForm/>}/>
        <Route exact path="/login" element={<SignInForm/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/verify" element={<VerifyOtp/>}/>
        <Route exact path="/update" element={<UpdateForm/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
