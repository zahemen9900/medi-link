import React, { useState } from 'react';
import './Referrals.css';

const Referrals = () => {
  const [activeTab, setActiveTab] = useState('received');

  // Sample data for received referrals
  const receivedReferralsData = [
    {
      id: 1,
      doctor: {
        name: 'Dr. Suresh',
        title: 'Physician',
        date: 'April 5, 2019',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      patient: {
        name: 'John Doe',
        dob: 'DOB',
        details: '1/1/1980'
      },
      schedule: {
        date: 'April 3, 2019',
        time: '7:30am',
        location: 'Pediatrics unit'
      },
      status: 'Opened'
    },
    {
      id: 2,
      doctor: {
        name: 'Dr. Suresh',
        title: 'Physician',
        date: 'April 5, 2019',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      patient: {
        name: 'John Doe',
        dob: 'DOB',
        details: '1/1/1980'
      },
      schedule: {
        date: 'April 3, 2019',
        time: '7:30am',
        location: 'Pediatrics unit'
      },
      status: 'Opened'
    },
    {
      id: 3,
      doctor: {
        name: 'Dr. Suresh',
        title: 'Physician',
        date: 'April 5, 2019',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      patient: {
        name: 'John Doe',
        dob: 'DOB',
        details: '1/1/1980'
      },
      schedule: {
        date: 'April 3, 2019',
        time: '7:30am',
        location: 'Pediatrics unit'
      },
      status: 'Opened'
    },
    {
      id: 4,
      doctor: {
        name: 'Dr. Suresh',
        title: 'Physician',
        date: 'April 5, 2019',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      patient: {
        name: 'John Doe',
        dob: 'DOB',
        details: '1/1/1980'
      },
      schedule: {
        date: 'April 3, 2019',
        time: '7:30am',
        location: 'Pediatrics unit'
      },
      status: 'Opened'
    },
    {
      id: 5,
      doctor: {
        name: 'Dr. Suresh',
        title: 'Physician',
        date: 'April 5, 2019',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      patient: {
        name: 'John Doe',
        dob: 'DOB',
        details: '1/1/1980'
      },
      schedule: {
        date: 'April 3, 2019',
        time: '7:30am',
        location: 'Pediatrics unit'
      },
      status: 'Opened'
    }
  ];

  // Sample data for made referrals
  const madeReferralsData = [
    {
      id: 101,
      doctor: {
        name: 'You',
        title: 'Referring Physician',
        date: 'May 10, 2019',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      patient: {
        name: 'Sarah Johnson',
        dob: 'DOB',
        details: '5/15/1975'
      },
      to: {
        name: 'Dr. Emily Chen',
        specialty: 'Cardiologist',
        hospital: 'Central Hospital'
      },
      schedule: {
        date: 'May 15, 2019',
        time: '9:00am',
        location: 'Cardiology Department'
      },
      status: 'Pending'
    },
    {
      id: 102,
      doctor: {
        name: 'You',
        title: 'Referring Physician',
        date: 'May 8, 2019',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      patient: {
        name: 'Michael Brown',
        dob: 'DOB',
        details: '3/22/1968'
      },
      to: {
        name: 'Dr. Robert Wilson',
        specialty: 'Neurologist',
        hospital: 'Metro Medical Center'
      },
      schedule: {
        date: 'May 20, 2019',
        time: '2:30pm',
        location: 'Neurology Wing'
      },
      status: 'Accepted'
    },
    {
      id: 103,
      doctor: {
        name: 'You',
        title: 'Referring Physician',
        date: 'May 5, 2019',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      patient: {
        name: 'Jennifer Davis',
        dob: 'DOB',
        details: '7/10/1982'
      },
      to: {
        name: 'Dr. Lisa Wong',
        specialty: 'Dermatologist',
        hospital: 'Skin & Health Clinic'
      },
      schedule: {
        date: 'May 12, 2019',
        time: '11:15am',
        location: 'Dermatology Department'
      },
      status: 'Completed'
    },
    {
      id: 104,
      doctor: {
        name: 'You',
        title: 'Referring Physician',
        date: 'May 1, 2019',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      patient: {
        name: 'Robert Miller',
        dob: 'DOB',
        details: '9/3/1970'
      },
      to: {
        name: 'Dr. James Taylor',
        specialty: 'Orthopedic Surgeon',
        hospital: 'City General Hospital'
      },
      schedule: {
        date: 'May 18, 2019',
        time: '10:00am',
        location: 'Orthopedics Department'
      },
      status: 'Pending'
    }
  ];

  // Render received referrals
  const renderReceivedReferrals = () => {
    return (
      <>
        <div className="referrals-header">
          <div className="header-from">From</div>
          <div className="header-patient">Patient</div>
          <div className="header-schedule">Schedule</div>
          <div className="header-status">Status</div>
        </div>
        
        <div className="referrals-list">
          {receivedReferralsData.map(referral => (
            <div className="referral-item" key={referral.id}>
              <div className="referral-doctor">
                <div className="doctor-avatar">
                  <img src={referral.doctor.avatar} alt={referral.doctor.name} />
                </div>
                <div className="doctor-info">
                  <div className="doctor-name">{referral.doctor.name}</div>
                  <div className="doctor-title">{referral.doctor.title}</div>
                  <div className="doctor-date">{referral.doctor.date}</div>
                </div>
              </div>
              
              <div className="referral-patient">
                <div className="patient-name">{referral.patient.name}</div>
                <div className="patient-details">
                  <span>{referral.patient.dob}</span>
                  <span className="info-icon">i</span>
                </div>
                <div className="patient-dob">{referral.patient.details}</div>
              </div>
              
              <div className="referral-schedule">
                <div className="schedule-date">{referral.schedule.date}</div>
                <div className="schedule-time">{referral.schedule.time}</div>
                <div className="schedule-location">{referral.schedule.location}</div>
              </div>
              
              <div className="referral-status">
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span className="status-text">{referral.status}</span>
                </div>
                <button className="status-button accept">Accept</button>
                <button className="status-button decline">Decline</button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  // Render made referrals
  const renderMadeReferrals = () => {
    return (
      <>
        <div className="referrals-header made-header">
          <div className="header-patient">Patient</div>
          <div className="header-to">Referred To</div>
          <div className="header-schedule">Schedule</div>
          <div className="header-status">Status</div>
        </div>
        
        <div className="referrals-list">
          {madeReferralsData.map(referral => (
            <div className="referral-item made-item" key={referral.id}>
              <div className="referral-patient">
                <div className="patient-name">{referral.patient.name}</div>
                <div className="patient-details">
                  <span>{referral.patient.dob}</span>
                  <span className="info-icon">i</span>
                </div>
                <div className="patient-dob">{referral.patient.details}</div>
              </div>
              
              <div className="referral-to">
                <div className="to-name">{referral.to.name}</div>
                <div className="to-specialty">{referral.to.specialty}</div>
                <div className="to-hospital">{referral.to.hospital}</div>
              </div>
              
              <div className="referral-schedule">
                <div className="schedule-date">{referral.schedule.date}</div>
                <div className="schedule-time">{referral.schedule.time}</div>
                <div className="schedule-location">{referral.schedule.location}</div>
              </div>
              
              <div className="referral-status">
                <div className={`status-indicator ${referral.status.toLowerCase()}`}>
                  <span className={`status-dot ${referral.status.toLowerCase()}`}></span>
                  <span className="status-text">{referral.status}</span>
                </div>
                <button className="status-button view">View Details</button>
                <button className="status-button follow-up">Follow Up</button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="referrals-container">
      <h1>Referrals</h1>
      
      <div className="referrals-tabs">
        <button 
          className={`tab-button ${activeTab === 'received' ? 'active' : ''}`}
          onClick={() => setActiveTab('received')}
        >
          Received
        </button>
        <button 
          className={`tab-button ${activeTab === 'made' ? 'active' : ''}`}
          onClick={() => setActiveTab('made')}
        >
          Made
        </button>
      </div>
      
      <div className="referrals-content">
        {activeTab === 'received' ? renderReceivedReferrals() : renderMadeReferrals()}
      </div>
    </div>
  );
};

export default Referrals; 