import React from "react";
import { FaHospital, FaUserMd, FaHeartbeat, FaAmbulance } from "react-icons/fa";
import "./ExclusivePackages.css";

const ExclusivePackages = () => {
  const packages = [
    {
      icon: <FaUserMd />,
      title: "Virtual Consultation",
      description: "Pre-travel and follow-up access to top specialists.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Premium Wellness Packages",
      description: "Unique offerings like IV therapy and detox retreats.",
    },
    {
      icon: <FaHospital />,
      title: "Personalized care",
      description: "Tailored itineraries and concierge support.",
    },
    {
      icon: <FaAmbulance />,
      title: "Insurance Facilitation",
      description: "Simplified billing and insurance support.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Advanced Analytics",
      description: "Exclusive insights for optimised client journeys.",
    },
    {
      icon: <FaUserMd />,
      title: "Specialized Training",
      description: "Industry-leading training.",
    },
    {
      icon: <FaHospital />,
      title: "Elite Partnership",
      description: "Treatments available only through top providers.",
    },
  ];

  return (
    <section className="exclusive-packages">
      <div className="container">
        <h2>Exclusive Packages with Medi-Link</h2>
        <p className="section-description">
          Partnering with My 1Health gives you access to a suite of enhancements
          available only to our trusted network.
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
