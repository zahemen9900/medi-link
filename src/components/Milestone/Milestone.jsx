import React from 'react';
import './Milestone.css';

const Milestone = () => {
  const milestones = [
    {
        number: '960+',
        description: 'Clients Successfully Referred',
      },
    {
      number: '150+',
      description: 'Healthcare Facilities Nationwide',
    },
    {
      number: '100+',
      description: 'Trusted Referral Partners',
    },
    {
      number: '7',
      description: 'Sub Saharan Countries With Network Presence',
    },
    {
      number: '1',
      description: 'Supporting Airline Partner with Healthcare Referral Services',
    },
  ];

  return (
    <section className="milestone-section">
      <div className="milestone-container">

        <h1 className="milestone-heading">Our Key Milestones</h1>
        <div className="milestone-grid">
          {milestones.map((milestone, index) => (
            <div key={index} className="milestone-item">
              <h2 className="milestone-number">{milestone.number}</h2>
              <p className="milestone-description">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;