// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  const handleClick = () => {
    // Handle click logic
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            width="26"
            viewBox="0 0 1000 1000"
            style={{ fill: '#3685fb' }}
          >
            {/* ... (your SVG content) */}
          </svg>
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-times fa fa-bars"></i>
      </div>
      <ul className="nav__links active">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="#">Appointments</Link>
        </li>
        <li className="link">
          <Link to="#">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="#">Reviews</Link>
        </li>
        <li className="link">
          <Link to="/Sign_Up">
            <button className="btn1">Sign Up</button>
          </Link>
        </li>
        <li className="link">
          <Link to="/Login">
            <button className="btn1">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
