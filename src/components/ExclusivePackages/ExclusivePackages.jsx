import React from 'react';
import { FaHospital, FaUserMd, FaHeartbeat, FaAmbulance } from 'react-icons/fa';
import './ExclusivePackages.css';

const ExclusivePackages = () => {
  const packages = [
    {
      icon: <FaUserMd />,
      title: 'Virtual Consultation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisrcitation'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Premium Wellness Packages',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisrcitation'
    },
    {
      icon: <FaHospital />,
      title: 'Personalized care',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisrcitation'
    },
    {
      icon: <FaAmbulance />,
      title: 'Insurance Facilitation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisrcitation'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Advanced Analytics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisrcitation'
    },
    {
      icon: <FaUserMd />,
      title: 'Specialized Training',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisrcitation'
    },
    {
      icon: <FaHospital />,
      title: 'Elite Partnership',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisrcitation'
    }
  ];

  return (
    <section className="exclusive-packages">
      <div className="container">
        <h2>Exclusive Packages with Hello</h2>
        <p className="section-description">
          Discover our comprehensive healthcare packages designed to provide you with the best medical care and services.
        </p>
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <div className="package-icon">{pkg.icon}</div>
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusivePackages;