import React, { useState } from "react";
import "./ReferralPartner.css";
import ReferralForm from "../ReferralForm/ReferralForm";

const ReferralPartner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="referral-partner-section">
      <div className="referral-partner-container">
        <div className="referral-partner-content">
          <h2>Become a Medi-Link Referral Partner Today</h2>
          <p>
            Partner with a global leader in healthcare and wellness referrals.
            Start earning with each client you connect to world-class care. Your
            success, simplified.
          </p>
          <p>Ready to Grow with Us? Join the My 1Health Referral Partner Network Today.</p>
          <button className="apply-button" onClick={() => setIsModalOpen(true)}>
            Apply today
          </button>
        </div>
        <div className="referral-partner-image">
          <img
            src="/src/assets/ApplyNow-pic.jpg"
            alt="Doctor with smartphone"
          />
        </div>
      </div>
      <ReferralForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ReferralPartner;
