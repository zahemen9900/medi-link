import React from "react";
import "./Hero.css";
import heroImg from "../../assets/HeroImg.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Empowering Your Success in Global Healthcare and Wellness Referral
          </h1>
          <p>
            Connect with world-class medical facilities and experienced
            healthcare providers for quality medical care and treatment.
          </p>
            <button className="cta-button">Request more Info</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Healthcare Professional" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
