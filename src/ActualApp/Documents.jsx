import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Documents.css";
import Referrals from "./Referrals"; // Import the Referrals component
import PatientSummary from "./PatientSummary"; // Import the PatientSummary component

const Documents = ({ initialSection }) => {
  const [activeSection, setActiveSection] = useState("appointments");
  const [activeTab, setActiveTab] = useState("upcoming");
  const navigate = useNavigate();

  // Use the initialSection prop if provided
  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection]);

  // Sample appointments data
  const appointments = [
    {
      id: 1,
      type: "Consultation",
      date: "23.03.2025",
      time: "11:00-11:30",
      patient: "Jane Deer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      type: "Checkup",
      date: "23.03.2025",
      time: "1:00-1:30",
      patient: "Jane Deer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 3,
      type: "Checkup",
      date: "23.03.2025",
      time: "3:00-3:30",
      patient: "Jane Deer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 4,
      type: "Consultation",
      date: "24.03.2025",
      time: "11:00-11:30",
      patient: "Jane Deer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    }
  ];

  // Past appointments data
  const pastAppointments = [
    {
      id: 101,
      type: "Consultation",
      date: "15.02.2025",
      time: "09:00-09:30",
      patient: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 102,
      type: "Checkup",
      date: "10.02.2025",
      time: "14:00-14:30",
      patient: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "appointments":
        return (
          <div className="section-content appointments-content">
            <div className="appointments-tabs">
              <div className="tab-header">
                <h3
                  className={activeTab === "upcoming" ? "active" : ""}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming
                </h3>
                <h3
                  className={activeTab === "past" ? "active" : ""}
                  onClick={() => setActiveTab("past")}
                >
                  Past
                </h3>
              </div>
              <div className="appointments-list">
                {activeTab === "upcoming" && (
                  <>
                    {appointments.map(appointment => (
                      <div key={appointment.id} className="appointment-item">
                        <div className={`appointment-type ${appointment.type.toLowerCase()}`}>
                          {appointment.type}
                        </div>
                        <div className="appointment-details">
                          <div className="appointment-info-row">
                            <div>
                              <div className="appointment-date">{appointment.date}</div>
                              <div className="appointment-time">{appointment.time}</div>
                            </div>
                            <div className="appointment-patient">
                              <img
                                src={appointment.avatar}
                                alt={appointment.patient}
                                className="patient-avatar"
                              />
                              <span className="patient-name">{appointment.patient}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
                {activeTab === "past" && (
                  <>
                    {pastAppointments.map(appointment => (
                      <div key={appointment.id} className="appointment-item">
                        <div className={`appointment-type ${appointment.type.toLowerCase()}`}>
                          {appointment.type}
                        </div>
                        <div className="appointment-details">
                          <div className="appointment-info-row">
                            <div>
                              <div className="appointment-date">{appointment.date}</div>
                              <div className="appointment-time">{appointment.time}</div>
                            </div>
                            <div className="appointment-patient">
                              <img
                                src={appointment.avatar}
                                alt={appointment.patient}
                                className="patient-avatar"
                              />
                              <span className="patient-name">{appointment.patient}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        );
      case "referral":
        return <Referrals />;
      case "summary":
        return <PatientSummary />;
      case "hospitals":
        return (
          <div className="section-content hospital-available-content">
            <h2 className="hospital-section-title">Hospital Available</h2>
            
            <div className="hospital-page">
              <h3 className="hospital-section-title">Ochsner Hospital Page</h3>
              
              <div className="hospital-header">
                <div className="hospital-banner">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" 
                    alt="Hospital Hallway" 
                    className="hospital-banner-img" 
                  />
                </div>
                
                <div className="hospital-profile">
                  <div className="hospital-avatar">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Ochsner Hospital" 
                      className="hospital-avatar-img" 
                    />
                  </div>
                  <div className="hospital-info">
                    <div className="hospital-name-container">
                      <h3 className="hospital-name">Ochsner Hospital</h3>
                      <span className="verified-badge">✓</span>
                    </div>
                    <p className="hospital-description">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
                    </p>
                    <div className="hospital-location">
                      <span className="location-icon">📍</span>
                      <span className="location-text">California, CA 1234</span>
                    </div>
                    <div className="hospital-stats">
                      <div className="stat-item">
                        <span className="stat-icon">👥</span>
                        <span className="stat-value">25 specialists</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">👨‍⚕️</span>
                        <span className="stat-value">150 doctors</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">👤</span>
                        <span className="stat-value">127 followers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hospital-content">
                <div className="hospital-about">
                  <h3 className="content-section-title">About</h3>
                  <p className="about-text">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, 
                    Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. 
                    Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi 
                    Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit 
                    In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. 
                    Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia 
                    Deserunt Mollit Anim Id Est Laborum.
                  </p>
                  <button className="read-more-btn">Read more</button>
                </div>
                
                <div className="hospital-information">
                  <h3 className="content-section-title">Hospital Information</h3>
                  <div className="info-grid">
                    <div className="info-card">
                      <h4 className="info-card-title">Specialties</h4>
                      <ul className="specialties-list">
                        <li>Cardiology</li>
                        <li>Neurology</li>
                        <li>Oncology</li>
                        <li>Pediatrics</li>
                        <li>Orthopedics</li>
                      </ul>
                    </div>
                    <div className="info-card">
                      <h4 className="info-card-title">Facilities</h4>
                      <ul className="facilities-list">
                        <li>Emergency Room</li>
                        <li>ICU</li>
                        <li>Operating Rooms</li>
                        <li>Diagnostic Imaging</li>
                        <li>Laboratory Services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Hospital */}
            <div className="hospital-page">
              <h3 className="hospital-section-title">Mayo Clinic</h3>
              
              <div className="hospital-header">
                <div className="hospital-banner">
                  <img 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Hospital Exterior" 
                    className="hospital-banner-img" 
                  />
                </div>
                
                <div className="hospital-profile">
                  <div className="hospital-avatar">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Mayo Clinic" 
                      className="hospital-avatar-img" 
                    />
                  </div>
                  <div className="hospital-info">
                    <div className="hospital-name-container">
                      <h3 className="hospital-name">Mayo Clinic</h3>
                      <span className="verified-badge">✓</span>
                    </div>
                    <p className="hospital-description">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
                    </p>
                    <div className="hospital-location">
                      <span className="location-icon">📍</span>
                      <span className="location-text">Rochester, MN 55905</span>
                    </div>
                    <div className="hospital-stats">
                      <div className="stat-item">
                        <span className="stat-icon">👥</span>
                        <span className="stat-value">42 specialists</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">👨‍⚕️</span>
                        <span className="stat-value">215 doctors</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">👤</span>
                        <span className="stat-value">189 followers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hospital-content">
                <div className="hospital-about">
                  <h3 className="content-section-title">About</h3>
                  <p className="about-text">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, 
                    Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. 
                    Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi 
                    Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit 
                    In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. 
                    Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia 
                    Deserunt Mollit Anim Id Est Laborum.
                  </p>
                  <button className="read-more-btn">Read more</button>
                </div>
                
                <div className="hospital-information">
                  <h3 className="content-section-title">Hospital Information</h3>
                  <div className="info-grid">
                    <div className="info-card">
                      <h4 className="info-card-title">Specialties</h4>
                      <ul className="specialties-list">
                        <li>Transplant Medicine</li>
                        <li>Cancer Treatment</li>
                        <li>Cardiovascular Medicine</li>
                        <li>Neurosurgery</li>
                        <li>Genetic Medicine</li>
                      </ul>
                    </div>
                    <div className="info-card">
                      <h4 className="info-card-title">Facilities</h4>
                      <ul className="facilities-list">
                        <li>Research Centers</li>
                        <li>Advanced Imaging</li>
                        <li>Specialized Surgery Units</li>
                        <li>Rehabilitation Center</li>
                        <li>Telemedicine Services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="section-content">Select a section</div>;
    }
  };

  return (
    <div className="documents-container">
      <div className="documents-main">
        <nav className="documents-nav">
          <div
            className={`nav-item ${
              activeSection === "appointments" ? "active" : ""
            }`}
            onClick={() => setActiveSection("appointments")}
          >
            Appointments
          </div>
          <div
            className={`nav-item ${
              activeSection === "referral" ? "active" : ""
            }`}
            onClick={() => setActiveSection("referral")}
          >
            Referral track
          </div>
          <div
            className={`nav-item ${
              activeSection === "summary" ? "active" : ""
            }`}
            onClick={() => setActiveSection("summary")}
          >
            Patient summary
          </div>
          <div
            className={`nav-item ${
              activeSection === "hospitals" ? "active" : ""
            }`}
            onClick={() => setActiveSection("hospitals")}
          >
            Hospitals available
          </div>
        </nav>
      </div>
      <div className={`${activeSection === "appointments" ? "appointments-container" : ""} 
                       ${activeSection === "referral" ? "referrals-section-container" : ""} 
                       ${activeSection === "summary" ? "patient-summary-section-container" : ""}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Documents;
