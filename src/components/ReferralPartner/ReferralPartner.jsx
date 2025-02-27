import React, { useState } from 'react';
import './ReferralPartner.css';
import ReferralForm from '../ReferralForm/ReferralForm';

const ReferralPartner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="referral-partner-section">
      <div className="referral-partner-container">
        <div className="referral-partner-content">
          <h2>Become a Referral Partner Today</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisrcitation ullamco
          laboris nisi ut ant, sunt in culpa qui officia deserunt mollit anim id est
          laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetue adipisrcitatation</p>
          <button className="apply-button" onClick={() => setIsModalOpen(true)}>Apply today</button>
        </div>
        <div className="referral-partner-image">
          <img src="../src/assets/ApplyNow-pic.jpg" alt="Doctor with smartphone" />
        </div>
      </div>
      <ReferralForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ReferralPartner;