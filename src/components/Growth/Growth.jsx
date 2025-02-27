import React from 'react';
import './Growth.css';
import growthImage from '../../assets/Growth-pic.jpg';

const Growth = () => {
  return (
    <section className="growth-section">
      <div className="growth-container">
        <div className="growth-image">
          <img src={growthImage} alt="Growth and Analytics" />
        </div>
        <div className="growth-content">
          <h2>Monitor your growth through our Dedicated Referral system</h2>
          <p className="section-description">
            Track your success and expand your healthcare network with our comprehensive analytics and reporting tools.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <div className="feature-text">
                <h3>Real-time Analytics Dashboard</h3>
                <p>Access detailed insights about your referrals, patient engagement, and revenue metrics in real-time.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <div className="feature-text">
                <h3>Performance Tracking</h3>
                <p>Monitor your success rates, patient satisfaction scores, and overall business growth through comprehensive reports.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <div className="feature-text">
                <h3>Network Expansion Tools</h3>
                <p>Leverage our platform to identify new partnership opportunities and expand your healthcare network globally.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <div className="feature-text">
                <h3>Customized Reports</h3>
                <p>Generate detailed reports tailored to your specific needs, helping you make data-driven decisions for your practice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;