import React from "react";
import "./aboutUs.css";
import ReferralPic from "../../assets/Referral-Img.jpg";

const aboutUs = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-image">
          <img src={ReferralPic} alt="Healthcare Professional" />
        </div>
        <div className="about-hero-content">
          <h1>About The Referral Partner Network</h1>
          <p>
            The Medi-Link Referral Partner Network (RPN) is a trusted community
            of healthcare and wellness champions dedicated to connecting clients
            with top healthcare and wellness solutions.
          </p>
          <p>
            The Medi-Link RPN empowers you to confidently provide world-class
            healthcare and wellness options to your clients, whether you're a
            new or established medical tourism facilitator, travel agent, or a
            professional interested in growing your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
