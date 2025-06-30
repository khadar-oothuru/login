import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import loginImage from '../assets/image.png';

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Signup Illustration" />
      </div>
      <div className="login-right">
        <h2>Create Account</h2>
        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
        <p className="switch-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;