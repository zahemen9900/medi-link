import React, { useState } from 'react';
import './HowItWorks.css';
import ReferralForm from '../ReferralForm/ReferralForm';

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const steps = [
    {
      number: 1,
      title: 'Sign up',
      description: 'Create your account and complete your profile to join our healthcare referral network'
    },
    {
      number: 2,
      title: 'Leverage our tools',
      description: 'Access our suite of referral management tools and resources'
    },
    {
      number: 3,
      title: 'Start Referring',
      description: 'Connect patients with quality healthcare providers in our network'
    },
    {
      number: 4,
      title: 'Earn',
      description: 'Receive competitive compensation for successful referrals'
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