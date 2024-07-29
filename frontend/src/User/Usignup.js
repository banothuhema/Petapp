import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaSignOutAlt } from 'react-icons/fa';
import './usignupStyles.css';  // Import the CSS file for signup

const Usignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    let payload = { email, password };
    axios
      .post("http://localhost:8000/usignup", payload)
      .then((res) => {
        console.log("signup: " + res.data.Status);
        if (res.data.Status === "Success") {
          localStorage.setItem('user', JSON.stringify(res.data.user));
          navigate('/uhome');
          alert("Signup successful");
        } else {
          alert("Signup failed");
        }
      })
      .catch((err) => console.log(err));
  };

  const formHandle2 = (e) => {
    e.preventDefault();
    navigate("/ulogin");
  };

  return (
    <div className="full-screen-bg">
      <div className="signup-container">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Create User Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="current-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
            >
              Sign up
            </button>
            <p className="mt-2 text-sm text-gray-700">
              Already have an account?{" "}
              <button
                onClick={formHandle2}
                className="ml-2 text-red-500 hover:underline focus:outline-none focus:ring focus:border-indigo-300 transition-all duration-300"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
      <Link to="/" className="exit-icon">
        <FaSignOutAlt />
      </Link>
      <Link to='/alogin' className='admin-login'>
        Admin Login
      </Link>
    </div>
  );
};

export default Usignup;
