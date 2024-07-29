import React, { useState } from 'react';
import '../User/Navbar.css'; // Import your CSS file
import { Link, useNavigate } from 'react-router-dom';

function Anavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="container">
        {/* Navbar brand */}
        <p className="navbar-brand">
          <img src="https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/19207275-wgp-logo-with-tagline-792x364.jpeg"  />
       <strong style={{ paddingRight: "400px" }}>Admin</strong>
        </p>

        {/* Navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/ahome'>Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/users'>Users</Link>
          </li>
          <li className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{paddingBottom:"5px"}}>
            <div className="dropdown" >
              <button className="dropbtn nav-link" style={{background:"none"}}>Services</button>
              <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                <Link to="/getgroom">Grooming</Link>
                <Link to="/getwellness">Wellness</Link>
                <Link to="/getadditional">Additional</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/getproducts">Products</Link>
          </li>
        </ul>
        <button className="cssbuttons-io-button" onClick={()=>navigate('/')}>
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
      </div>
    </nav>
  );
}

export default Anavbar;
