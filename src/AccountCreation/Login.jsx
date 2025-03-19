import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Simple credential check (for demo purposes)
    // In a real app, you would validate against an API
    try {
      if (formData.email === 'patient@example.com' && formData.password === 'password') {
        login({
          id: '1',
          name: 'John Doe',
          email: formData.email,
          role: 'patient'
        });
        navigate('/dashboard');
      } else if (formData.email === 'doctor@example.com' && formData.password === 'password') {
        login({
          id: '2',
          name: 'Dr. Emily Smith',
          email: formData.email,
          role: 'doctor'
        });
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred during login');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
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
            {error && <div className="error-message">{error}</div>}
            
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
            
            <button 
              type="submit" 
              className="login-button"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            
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