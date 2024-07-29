import React, { useState } from 'react';
import '../User/Navbar.css'; // Import your CSS file
import { Link, useNavigate } from 'react-router-dom';

function Unavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const getName = JSON.parse(localStorage.getItem('user')).name;

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const logout = () => {
    navigate('/');
    // localStorage.removeItem
    alert('Logout Successful');
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Navbar brand */}
        <p className="navbar-brand">
          <img src="https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/19207275-wgp-logo-with-tagline-792x364.jpeg" style={{ paddingRight: "450px" }} alt="Logo" />
        </p>
        {/* Navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/uhome'>Home</Link>
          </li>
          <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ paddingBottom: "5px" }}>
            <div className="dropdown">
              <Link className="nav-link" style={{ background: "none" }}>Services</Link>
              <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                <Link to="/ugroom">Grooming</Link>
                <Link to="/uwellness">Wellness</Link>
                <Link to="/uadditional">Additional</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/uproducts'>Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/mybookings'>My Bookings</Link>
          </li>
          
        </ul>
        <button className="cssbuttons-io-button" onClick={logout}>
          Logout
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
        <h1 style={{ fontStyle: "oblique", fontWeight: "bold", fontSize: "20px" }}>({getName})</h1>
      </div>
    </nav>
  );
}

export default Unavbar;
