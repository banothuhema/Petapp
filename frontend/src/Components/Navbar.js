import React from 'react';
import '../User/Navbar.css'; // Import your CSS file
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const navigate =useNavigate()

  return (
    <nav className="navbar" style={{backgroundColor:"lightseagreen"}}>
      <div className="container">
        {/* Navbar brand */}
        <p className="navbar-brand" >
        <img src="https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/19207275-wgp-logo-with-tagline-792x364.jpeg"  style={{paddingRight:"450px"}} />
        </p>
        {/* Navbar links */}
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/services'>Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/product'>Products</Link>
          </li>
        
        </ul>
        <button class="cssbuttons-io-button" onClick={()=>navigate('/ulogin')}>
          Login
  <div class="icon">
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
{/* <Link to='/getgroom'>aaa</Link>
<Link to='/getwellness'>bbb</Link> */}
{/* <Link>ccc</Link> */}

      </div>
    </nav>
  );
}

export default Navbar;
