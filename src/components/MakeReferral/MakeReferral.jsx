import React, { useState } from 'react';
import './MakeReferral.css';

export const MakeReferral = ({ onClose }) => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [message, setMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Sample patient data
  const patients = [
    {
      id: 1,
      name: 'John Doe',
      dob: '11/10/97',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'John Doe',
      dob: '11/10/97',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
  ];

  // Medical categories
  const categories = [
    { id: 1, name: 'Pediatrics', icon: '👶' },
    { id: 2, name: 'Pharmacy', icon: '💊' },
    { id: 3, name: 'Cardiology', icon: '❤️' },
    { id: 4, name: 'Endocrinology', icon: '🧪' },
    { id: 5, name: 'Opthamology', icon: '👁️' },
    { id: 6, name: 'Psychology', icon: '🧠' },
    { id: 7, name: 'Pulmonology', icon: '🫁' },
    { id: 8, name: 'Oncology', icon: '🔬' }
  ];

  // Sample specialists data
  const specialists = [
    {
      id: 1,
      name: 'Dr Aaron Jacobs',
      specialty: 'MD, Neurology',
      rating: 4.97,
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
      id: 2,
      name: 'Dr Aaron Jacobs',
      specialty: 'MD, Neurology',
      rating: 4.97,
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    }
  ];

  // Priority options
  const priorities = [
    { id: 1, name: 'Normal' },
    { id: 2, name: 'Urgent' },
    { id: 3, name: 'Critical' }
  ];

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSpecialistSelect = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      patient: selectedPatient,
      category: selectedCategory,
      specialist: selectedSpecialist,
      priority: selectedPriority,
      message
    });
    
    // Show success popup
    setShowSuccessPopup(true);
  };

  return (
    <div className="make-referral-container">
      <div className="make-referral-content">
        <button className="back-button" onClick={onClose}>
          <span className="back-icon">&#8592;</span>
        </button>
        <div className="make-referral-header">
          <h2 className="make-referral-header-title">Make Referral</h2>
        </div>
        <div className="specialist-selection-container">
          <div className="specialist-header">
            <h3 className="step-title">Choose Patient</h3>
            <div className="specialist-navigation">
              <button className="nav-arrow">&#8592;</button>
              <button className="nav-arrow">&#8594;</button>
            </div>
          </div>
          <div className="specialist-grid">
            {patients.map(patient => (
              <div
                key={patient.id}
                className={`specialist-card ${selectedPatient?.id === patient.id ? 'selected' : ''}`}
                onClick={() => handlePatientSelect(patient)}
              >
                <div className="specialist-avatar">
                  <img src={patient.avatar} alt={patient.name} />
                </div>
                <div className="specialist-info">
                  <h4 className="specialist-name">{patient.name}</h4>
                  <p className="specialist-specialty">{patient.dob}</p>
                </div>
                <button className="specialist-options-btn">&#8942;</button>
              </div>
            ))}
          </div>
        </div>

        <div className="category-selection-container">
          <h3 className="step-title">Choose category</h3>
          <div className="category-grid">
            {categories.map(category => (
              <div
                key={category.id}
                className={`category-card ${selectedCategory?.id === category.id ? 'selected' : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="specialist-selection-container">
          <div className="specialist-header">
            <h3 className="step-title">Choose Specialist</h3>
            <div className="specialist-navigation">
              <button className="nav-arrow">&#8592;</button>
              <button className="nav-arrow">&#8594;</button>
            </div>
          </div>
          <div className="specialist-grid">
            {specialists.map(specialist => (
              <div
                key={specialist.id}
                className={`specialist-card ${selectedSpecialist?.id === specialist.id ? 'selected' : ''}`}
                onClick={() => handleSpecialistSelect(specialist)}
              >
                <div className="specialist-avatar">
                  <img src={specialist.avatar} alt={specialist.name} />
                </div>
                <div className="specialist-info">
                  <h4 className="specialist-name">{specialist.name}</h4>
                  <p className="specialist-specialty">{specialist.specialty}</p>
                  <div className="specialist-rating">
                    <span className="rating-star">&#9733;</span>
                    <span className="rating-value">{specialist.rating}</span>
                  </div>
                </div>
                <button className="specialist-options-btn">&#8942;</button>
              </div>
            ))}
          </div>
        </div>

        <div className="priority-selection-container">
          <h3 className="step-title">Choose Priority</h3>
          <div className="priority-options">
            {priorities.map(priority => (
              <div
                key={priority.id}
                className={`priority-option ${selectedPriority?.id === priority.id ? 'selected' : ''}`}
                onClick={() => handlePrioritySelect(priority)}
              >
                <div className="priority-radio">
                  <div className="radio-outer">
                    {selectedPriority?.id === priority.id && <div className="radio-inner"></div>}
                  </div>
                </div>
                <span className="priority-name">{priority.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="message-container">
          <div className="message-input-wrapper">
            <textarea
              className="message-input"
              placeholder="Say something...."
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="attachment-options">
            <button className="attachment-btn">
              <span className="attachment-icon">&#128247;</span>
              <span className="attachment-label">Photos</span>
            </button>
            <button className="attachment-btn">
              <span className="attachment-icon">&#128220;</span>
              <span className="attachment-label">Document</span>
            </button>
            <button className="attachment-btn">
              <span className="attachment-icon">&#127916;</span>
              <span className="attachment-label">Videos</span>
            </button>
          </div>
        </div>

        <div className="submit-container">
          <button
            className="submit-btn"
            disabled={!selectedPatient || !selectedCategory || !selectedSpecialist || !selectedPriority}
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>

      {showSuccessPopup && (
        <div className="success-popup-overlay">
          <div className="success-popup">
            <div className="success-icon">
              <span>&#10004;</span>
            </div>
            <h2>Congratulations</h2>
            <p>Referral has been booked successfully</p>
            <button className="done-btn" onClick={onClose}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeReferral;
