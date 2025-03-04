import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Medi-Link</h3>
          <p>Connecting healthcare professionals worldwide through our trusted referral network.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="./components/Hero/Hero.jsx">Home</a></li>
            <li><a href="./components/AboutUs/about.jsx">About Us</a></li>
            <li><a href="./components/HowItWorks/HowItWorks">How It Works</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Referral Program</a></li>
            <li><a href="#">Partner Network</a></li>
            <li><a href="#">Healthcare Solutions</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><FontAwesomeIcon icon={faPhone} /> +233 ###-####</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> contact@Medi-Link.com</li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} />  ### kumasi-tech</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Medi-Link. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;