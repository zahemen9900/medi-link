import React, { useState } from 'react';
import './ReferralForm.css';

const ReferralForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    organization: '',
    currentOccupation: '',
    referralInterest: '',
    targetAudience: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization name is required';
    if (!formData.currentOccupation.trim()) newErrors.currentOccupation = 'Current occupation is required';
    if (!formData.referralInterest.trim()) newErrors.referralInterest = 'Please specify your interest';
    if (!formData.targetAudience.trim()) newErrors.targetAudience = 'Target audience is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Become a MMMedical Referral Partner</h2>
        <p className='fill'>Fill this form to start your Journey with us</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">*First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">*Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">*Email Address</label>
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
              <label htmlFor="phone">*Phone Number</label>
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
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="country">*Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={errors.country ? 'error' : ''}
              />
              {errors.country && <span className="error-message">{errors.country}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="organization">*Organization name</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className={errors.organization ? 'error' : ''}
              />
              {errors.organization && <span className="error-message">{errors.organization}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="currentOccupation">*Current Occupation</label>
              <input
                type="text"
                id="currentOccupation"
                name="currentOccupation"
                value={formData.currentOccupation}
                onChange={handleChange}
                className={errors.currentOccupation ? 'error' : ''}
              />
              {errors.currentOccupation && <span className="error-message">{errors.currentOccupation}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="referralInterest">*Interest in Referral Program</label>
              <input
                type="text"
                id="referralInterest"
                name="referralInterest"
                value={formData.referralInterest}
                onChange={handleChange}
                className={errors.referralInterest ? 'error' : ''}
              />
              {errors.referralInterest && <span className="error-message">{errors.referralInterest}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="targetAudience">*Target Audience</label>
            <input
              type="text"
              id="targetAudience"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              className={errors.targetAudience ? 'error' : ''}
            />
            {errors.targetAudience && <span className="error-message">{errors.targetAudience}</span>}
          </div>

          <button type="submit" className="submit-button">Submit</button>
          <p className='terms'>By submitting your request you agree to MMMedical's <span className="green-text">Terms of Use</span> and <span className="green-text">Privacy Policy</span>.</p>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;