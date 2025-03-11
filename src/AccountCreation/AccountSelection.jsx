import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountSelection.css';

const AccountSelection = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedOption === 'patient') {
      navigate('/signup/patient');
    } else if (selectedOption === 'doctors') {
      navigate('/signup/doctors');
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="account-selection-container">
      <div className="account-selection-modal">
        <div className="account-left">
          <h1>Medi-Link</h1>
        </div>
        
        <div className="account-right">
          <button className="close-button" onClick={handleClose}>×</button>
          
          <div className="account-content">
            <h2>Select an Account option:</h2>
            
            <div className="radio-options">
              <div className="radio-option">
                <input
                  type="radio"
                  id="patient"
                  name="accountType"
                  value="patient"
                  checked={selectedOption === 'patient'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <label htmlFor="patient">Patient</label>
              </div>
              
              <div className="radio-option">
                <input
                  type="radio"
                  id="doctors"
                  name="accountType"
                  value="doctors"
                  checked={selectedOption === 'doctors'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <label htmlFor="doctors">Doctors</label>
              </div>
            </div>
            
            <button 
              className="next-button" 
              onClick={handleNext}
              disabled={!selectedOption}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSelection; 