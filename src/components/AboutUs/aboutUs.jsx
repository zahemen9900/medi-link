import React from "react";
import "./aboutUs.css";
import Frame1Pic from "../../assets/Frame 1pic.png";

const aboutUs = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src={Frame1Pic} alt="Healthcare Professional" />
        </div>
        <div className="hero-content">
          <h1>About The Referral Partner Network</h1>
          <p>
            The Hello Referral Partner Network is trusted a trusted community of
            healthcare and wellness champions dedicated to connecting clients
            with top healthcare and wellness solutions
          </p>
          <p>
            The Hello empowers you to confidently provide world-class healthcare
            and wellness options to your clients, whether you're a new or
            established medical tourism facilitator, travel agent, or a
            professional interested in growing your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
