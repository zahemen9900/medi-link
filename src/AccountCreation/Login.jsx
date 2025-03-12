import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Simulate successful login and navigate to the dashboard
    navigate('/dashboard');
  };
  
  return (
    <div className="login-container">
      <div className="login-modal">
        <div className="login-left">
          <h1>Welcome Back!</h1>
          <p>Sign in to continue your healthcare journey with us.</p>
        </div>
        
        <div className="login-right">
          <div className="signup-prompt">
            <span>Don't have an account?</span>
            <Link to="/account-selection" className="login-signup-button">Sign up</Link>
          </div>
          
          <div className="login-header">
            <h2>Welcome Back to Medi-Link</h2>
            <p>Login to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">*Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">*Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="login-button">Login</button>
            
            <div className="login-divider">
              <div className="line"></div>
              <span>Or</span>
              <div className="line"></div>
            </div>
            
            <div className="social-login">
              <button type="button" className="social-button facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button type="button" className="social-button google">
                <FontAwesomeIcon icon={faGoogle} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 