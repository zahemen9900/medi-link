import React from "react";
import "./Hero.css";
import heroImg from "../../assets/HeroImg.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
          Committed to Your Growth - Empowering Your Success in Global Healthcare and Wellness Referrals
          </h1>
          <p>
           My Medi-Link is your gateway to a global network of 150+ trusted healthcare and wellness providers. Join us to elevate your services, attract more clients, and enhance your revenue potential by offering premier healthcare solutions.
          </p>
            <button className="cta-button">Request more Information</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Healthcare Professional" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
