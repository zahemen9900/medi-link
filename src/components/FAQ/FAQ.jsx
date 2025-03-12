import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  const faqData = [
    {
      question: 'What is Medi-Link?',
      answer: 'Medi-Link is a healthcare platform that connects patients with healthcare providers, facilitating easy access to medical services and referrals.'
    },
    {
      question: 'How does the referral system work?',
      answer: 'Our referral system allows healthcare providers to seamlessly refer patients to specialists, ensuring coordinated care and proper medical attention.'
    },
    {
      question: 'Is my medical information secure?',
      answer: 'Yes, we prioritize the security and privacy of your medical information. We use advanced encryption and follow strict healthcare data protection regulations.'
    },
    {
      question: 'How can I join as a healthcare provider?',
      answer: 'Healthcare providers can join by registering through our platform. We verify credentials and facilitate the onboarding process to ensure quality service.'
    },
    {
      question: 'What are the benefits of using Medi-Link?',
      answer: 'Medi-Link offers streamlined referrals, reduced wait times, improved communication between providers, and better patient care coordination.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-toggle">+</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;