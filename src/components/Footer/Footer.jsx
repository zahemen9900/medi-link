import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MMMedical</h3>
          <p>Connecting healthcare professionals worldwide through our trusted referral network.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">How It Works</a></li>
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
            <li><i className="fas fa-phone"></i> +1 (234) 567-8900</li>
            <li><i className="fas fa-envelope"></i> contact@mmmedical.com</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Healthcare Ave, Medical District</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} MMMedical. All rights reserved.</p>
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