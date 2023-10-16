import React from 'react';
import '../styles/Navbar.css'
import { useAuth } from '../authContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
 const {logout} = useAuth();
 const navigate = useNavigate();
  const handleLogOut=()=>{
    logout();
    navigate('/login');
  }
  return (
    <nav className="navbar">
      <div className="logo">User Management App</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li style={{ color: 'white', textDecoration: 'none' }}>
  <Link to='/update' style={{ color: 'white', textDecoration: 'none' }}>
        Profile
  </Link>
</li>

      </ul>
      <button className="sign-out-button" onClick={handleLogOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
