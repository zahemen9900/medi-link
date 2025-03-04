import React from "react";
import "./Growth.css";
import growthImage from "../../assets/Growth-pic.jpg";

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
            Our system automates payments and reconciliation, ensuring you
            receive earnings promptly and accurately for each referral.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <div className="feature-text">
                <h3>Global Network at Your Fingertips</h3>
                <p>
                  Instant access to top healthcare facilities worldwide, giving
                  you flexible options for your clients.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <div className="feature-text">
                <h3>Training & Marketing Hub</h3>
                <p>
                  On-demand training videos and downloadable marketing tools to
                  help you engage clients effectively.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <div className="feature-text">
                <h3>Real Time earnings Dashboard</h3>
                <p>
                  Track every referral's earnings and service fees with full
                  transparency, with automated payments ensuring prompt and
                  accurate disbursements.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">•</div>
              <div className="feature-text">
                <h3>P Easy Inquiry Submission</h3>
                <p>
                  Submit client inquiries effortlessly through a streamlined,
                  user-friendly interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
