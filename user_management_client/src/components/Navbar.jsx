import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  const handleSignOut = () => {
    // Add the code to sign the user out here
  };

  return (
    <nav className="navbar">
      <div className="logo">User Management App</div>
      <ul className="nav-links">
        <li>Home</li>
      </ul>
      <button className="sign-out-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
