import React, { useState, useEffect } from 'react';
import './Referrals.css';
import { AiOutlineInfoCircle, AiOutlineCheck } from 'react-icons/ai';
import MakeReferral from '../components/MakeReferral/MakeReferral';

const Referrals = ({ hideNavigation, onShowMakeReferral, onHideMakeReferral }) => {
  const [activeTab, setActiveTab] = useState('received');
  const [showMakeReferral, setShowMakeReferral] = useState(false);

  useEffect(() => {
    if (showMakeReferral && onShowMakeReferral) {
      onShowMakeReferral();
    } else if (!showMakeReferral && onHideMakeReferral) {
      onHideMakeReferral();
    }
  }, [showMakeReferral, onShowMakeReferral, onHideMakeReferral]);

  // Sample data for received referrals
  const receivedReferralsData = [
    {
      id: 1,
      doctor: {
        name: 'Dr Suresh',
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
        name: 'Dr Suresh',
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
        name: 'Dr Suresh',
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
        name: 'Dr Suresh',
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
        name: 'Dr Suresh',
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

  // Sample data for made referrals - updated to match the new design
  const madeReferralsData = [
    {
      id: 101,
      patient: {
        name: 'John Doe',
        dob: 'DOB',
        dobDetails: '11/19/97',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      specialist: {
        name: 'Dr Suresh',
        title: 'Physician',
        hospital: 'Penn Hospital'
      },
      priority: 'Normal',
      status: 'Sent'
    },
    {
      id: 102,
      patient: {
        name: 'John Doe',
        dob: 'DOB',
        dobDetails: '11/19/97',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      specialist: {
        name: 'Dr Suresh',
        title: 'Physician',
        hospital: 'Penn Hospital'
      },
      priority: 'Urgent',
      status: 'Sent'
    },
    {
      id: 103,
      patient: {
        name: 'John Doe',
        dob: 'DOB',
        dobDetails: '11/19/97',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      specialist: {
        name: 'Dr Suresh',
        title: 'Physician',
        hospital: 'Penn Hospital'
      },
      priority: 'Critical',
      status: 'Sent'
    }
  ];

  return (
    <div className="referrals-container">
      {showMakeReferral ? (
        <MakeReferral onClose={() => setShowMakeReferral(false)} />
      ) : (
        <>
          <h1>Referrals</h1>
          <div className="referrals-tabs">
            <div 
              className={`ref-tab ${activeTab === 'received' ? 'active' : ''}`}
              onClick={() => setActiveTab('received')}
            >
              <span className="tab-title">Received</span>
              {activeTab === 'received' && <div className="active-underline"></div>}
            </div>
            <div 
              className={`ref-tab ${activeTab === 'made' ? 'active' : ''}`}
              onClick={() => setActiveTab('made')}
            >
              <span className="tab-title">Made</span>
              {activeTab === 'made' && <div className="active-underline"></div>}
            </div>
          </div>
          
          <div className="referrals-content">
            {activeTab === 'received' ? (
              // Received tab content
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
                      <div className="from-column">
                        <div className="doctor-avatar">
                          <img src={referral.doctor.avatar} alt={referral.doctor.name} />
                        </div>
                        <div className="doctor-info">
                          <div className="doctor-name">{referral.doctor.name}</div>
                          <div className="doctor-title">{referral.doctor.title}</div>
                          <div className="doctor-date">{referral.doctor.date}</div>
                        </div>
                      </div>
                      
                      <div className="patient-column">
                        <div className="patient-name">{referral.patient.name}</div>
                        <div className="patient-dob">{referral.patient.dob}</div>
                        <div className="patient-info-icon">
                          <AiOutlineInfoCircle className="info-icon" />
                        </div>
                      </div>
                      
                      <div className="schedule-column">
                        <div className="schedule-date">{referral.schedule.date}</div>
                        <div className="schedule-time">{referral.schedule.time}</div>
                        <div className="schedule-location">{referral.schedule.location}</div>
                      </div>
                      
                      <div className="status-column">
                        <div className="status-indicator">
                          <span className="status-dot"></span>
                          <span className="status-text">Opened</span>
                        </div>
                        <div className="status-buttons">
                          <button className="status-button accept">Accept</button>
                          <button className="status-button decline">Decline</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="make-referral-button-container">
                  <button className="make-referral-button" onClick={() => setShowMakeReferral(true)}>Make Referral</button>
                </div>
              </>
            ) : (
              // Made tab content
              <>
                <div className="referrals-header">
                  <div className="header-patient">Patient</div>
                  <div className="header-specialist">Specialist</div>
                  <div className="header-priority">Priority</div>
                  <div className="header-status">Status</div>
                </div>
                
                <div className="referrals-list">
                  {madeReferralsData.map(referral => (
                    <div className="referral-item" key={referral.id}>
                      <div className="patient-column">
                        <div className="patient-avatar">
                          <img src={referral.patient.avatar} alt={referral.patient.name} />
                        </div>
                        <div className="patient-info">
                          <div className="patient-name">{referral.patient.name}</div>
                          <div className="patient-dob">{referral.patient.dob}</div>
                          <div className="patient-dob-details">{referral.patient.dobDetails}</div>
                        </div>
                      </div>
                      
                      <div className="specialist-column">
                        <div className="specialist-name">{referral.specialist.name}</div>
                        <div className="specialist-title">{referral.specialist.title}</div>
                        <div className="specialist-hospital">{referral.specialist.hospital}</div>
                      </div>
                      
                      <div className="priority-column">
                        <div className={`priority-indicator ${referral.priority.toLowerCase()}`}>
                          <span className="priority-dot"></span>
                          <span className="priority-text">{referral.priority}</span>
                        </div>
                      </div>
                      
                      <div className="status-column">
                        <div className="status-check">
                          <AiOutlineCheck className="check-icon" />
                        </div>
                        <div className="status-text">{referral.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Referrals;