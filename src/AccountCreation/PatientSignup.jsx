import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import "./Signup.css";
import Navbar from "../components/Navbar/Navbar";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PatientSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    // Validate full name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // Validate date of birth
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
      return;
    }

    setLoading(true);

    try {
      // Create user object for registration
      const patientData = {
        id: Date.now().toString(),
        name: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: "patient",
        patientDetails: {
          phone: formData.phone,
          dateOfBirth: formData.dateOfBirth,
          address: formData.address,
          avatar: `https://randomuser.me/api/portraits/${
            Math.random() > 0.5 ? "men" : "women"
          }/${Math.floor(Math.random() * 100)}.jpg`,
        },
      };

      // Register the user (but don't navigate to dashboard)
      register(patientData);
      
      // Display success message
      setSuccessMessage("Account created successfully! Only doctor accounts can access the dashboard. Thank you for registering.");
      setErrors({});
      
      // Reset form
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      });
      
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({ form: "Registration failed. Please try again." });
      setSuccessMessage('');
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
            <h1>Create Patient Account</h1>
            <p>Join our healthcare network and connect with doctors</p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            {errors.form && (
              <div className="form-error-message">{errors.form}</div>
            )}
            
            {successMessage && (
              <div className="form-success-message">{successMessage}</div>
            )}

            <div className="form-columns">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? "error" : ""}
                  />
                  {errors.firstName && (
                    <span className="error-message">{errors.firstName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "error" : ""}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={errors.dateOfBirth ? "error" : ""}
                  />
                  {errors.dateOfBirth && (
                    <span className="error-message">{errors.dateOfBirth}</span>
                  )}
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? "error" : ""}
                  />
                  {errors.lastName && (
                    <span className="error-message">{errors.lastName}</span>
                  )}
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
                      className={errors.password ? "error" : ""}
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="error-message">{errors.password}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="password-input-container">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={errors.confirmPassword ? "error" : ""}
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <span className="error-message">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="form-footer">
              <button
                type="submit"
                className="form-signup-button"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
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

export default PatientSignup;
