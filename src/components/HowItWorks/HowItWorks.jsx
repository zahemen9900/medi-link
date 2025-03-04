import React, { useState } from 'react';
import './HowItWorks.css';
import ReferralForm from '../ReferralForm/ReferralForm';

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const steps = [
    {
      number: 1,
      title: 'Sign up',
      description: 'Quick and easy registration process to get started fast.'
    },
    {
      number: 2,
      title: 'Leverage our tools',
      description: 'Marketing resources and case-handling tools at your fingertips.'
    },
    {
      number: 3,
      title: 'Start Referring',
      description: "Connect clients to their ideal services, backed by My Medi-Link's trusted network."
    },
    {
      number: 4,
      title: 'Earn',
      description: 'Transparent payment structure for every successful referral.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              {index < steps.length - 1 && <div className="connector-line" />}
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <button className="get-started-btn" onClick={() => setIsModalOpen(true)}>Get Started</button>
      </div>
      <ReferralForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HowItWorks;