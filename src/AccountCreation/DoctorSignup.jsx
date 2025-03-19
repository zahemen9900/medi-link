import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import './Signup.css';
import Navbar from '../components/Navbar/Navbar';

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    phone: '',
    specialization: '',
    licenseNumber: '',
    hospital: '',
    experience: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    // Validate specialization
    if (!formData.specialization.trim()) {
      newErrors.specialization = 'Specialization is required';
    }
    
    // Validate license number
    if (!formData.licenseNumber.trim()) {
      newErrors.licenseNumber = 'Medical license number is required';
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setLoading(true);
    
    try {
      // Create user object for registration
      const doctorData = {
        id: Date.now().toString(), // Simulate a unique ID (in a real app, this would come from your backend)
        name: formData.firstName,
        email: formData.email,
        role: 'doctor',
        doctorDetails: {
          phone: formData.phone,
          specialization: formData.specialization,
          licenseNumber: formData.licenseNumber,
          hospital: formData.hospital,
          experience: formData.experience,
          avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`
        }
      };
      
      // Register the user
      register(doctorData);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ form: 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-form-container">
          <div className="signup-header">
            <h1>Create Doctor Account</h1>
            <p>Join our healthcare network and connect with patients</p>
          </div>
          
          <form onSubmit={handleSubmit} className="signup-form">
            {errors.form && <div className="form-error-message">{errors.form}</div>}
            
            <div className="form-columns">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="fullName">First Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="fullName">Last Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="specialization">Specialization</label>
                  <input 
                    type="text" 
                    id="specialization" 
                    name="specialization" 
                    value={formData.specialization}
                    onChange={handleChange}
                    className={errors.specialization ? 'error' : ''}
                  />
                  {errors.specialization && <span className="error-message">{errors.specialization}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="licenseNumber">Medical License Number</label>
                  <input 
                    type="text" 
                    id="licenseNumber" 
                    name="licenseNumber" 
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className={errors.licenseNumber ? 'error' : ''}
                  />
                  {errors.licenseNumber && <span className="error-message">{errors.licenseNumber}</span>}
                </div>
              </div>
              
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="hospital">Hospital/Clinic</label>
                  <input 
                    type="text" 
                    id="hospital" 
                    name="hospital" 
                    value={formData.hospital}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="experience">Years of Experience</label>
                  <input 
                    type="number" 
                    id="experience" 
                    name="experience" 
                    min="0"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-input-container">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      id="password" 
                      name="password" 
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'error' : ''}
                    />
                    <button 
                      type="button" 
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              </div>
            </div>
            
            <div className="form-footer">
              <button 
                type="submit" 
                className="form-signup-button"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
              <p className="login-link">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DoctorSignup; 