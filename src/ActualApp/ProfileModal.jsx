import React from 'react';
import './ProfileModal.css';
import { AiOutlineClose } from 'react-icons/ai';

const ProfileModal = ({ isOpen, onClose, profile, profileType }) => {
  if (!isOpen) return null;

  const renderProfileContent = () => {
    switch(profileType) {
      case 'My colleagues':
        return (
          <div className="profile-details">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src={profile.avatar} alt={profile.name} />
              </div>
              <div className="profile-header-info">
                <h2>{profile.name}</h2>
                <p className="profile-title">{profile.title}</p>
                <p className="profile-specialty">{profile.specialty}</p>
              </div>
            </div>
            
            <div className="profile-section">
              <h3>Professional Information</h3>
              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span className="info-label">Department</span>
                  <span className="info-value">{profile.department}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Position</span>
                  <span className="info-value">{profile.position}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Experience</span>
                  <span className="info-value">{profile.experience || '10+ years'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Education</span>
                  <span className="info-value">{profile.education || 'MD, Harvard Medical School'}</span>
                </div>
              </div>
            </div>
            
            <div className="profile-section">
              <h3>Contact Information</h3>
              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">{profile.email || `${profile.name.toLowerCase().replace(' ', '.')}@hospital.org`}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{profile.phone || '(555) 123-4567'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Office</span>
                  <span className="info-value">{profile.office || 'Building A, Room 305'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Hours</span>
                  <span className="info-value">{profile.hours || 'Mon-Fri, 9am-5pm'}</span>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="profile-action-btn message-btn">Send Message</button>
              <button className="profile-action-btn schedule-btn">Schedule Meeting</button>
            </div>
          </div>
        );
      
      case 'My Patients':
        return (
          <div className="profile-details">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src={profile.avatar} alt={profile.name} />
              </div>
              <div className="profile-header-info">
                <h2>{profile.name}</h2>
                <p className="profile-age">Age: {profile.age}</p>
                <p className="profile-id">Patient ID: {profile.id || 'PT-' + Math.floor(10000 + Math.random() * 90000)}</p>
              </div>
            </div>
            
            <div className="profile-section">
              <h3>Medical Information</h3>
              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span className="info-label">Condition</span>
                  <span className="info-value">{profile.condition}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Last Visit</span>
                  <span className="info-value">{profile.lastVisit}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Next Appointment</span>
                  <span className="info-value">{profile.nextAppointment}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Primary Doctor</span>
                  <span className="info-value">{profile.primaryDoctor || 'Dr. ' + profile.name.split(' ')[0]}</span>
                </div>
              </div>
            </div>
            
            <div className="profile-section">
              <h3>Medical History</h3>
              <div className="medical-history">
                <div className="history-item">
                  <div className="history-date">Jan 15, 2023</div>
                  <div className="history-content">
                    <h4>Initial Consultation</h4>
                    <p>Patient presented with symptoms of {profile.condition}. Prescribed initial treatment plan.</p>
                  </div>
                </div>
                <div className="history-item">
                  <div className="history-date">Feb 28, 2023</div>
                  <div className="history-content">
                    <h4>Follow-up Appointment</h4>
                    <p>Patient showing improvement. Adjusted medication dosage.</p>
                  </div>
                </div>
                <div className="history-item">
                  <div className="history-date">{profile.lastVisit}</div>
                  <div className="history-content">
                    <h4>Recent Check-up</h4>
                    <p>Continued monitoring of condition. Scheduled next appointment for {profile.nextAppointment}.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="profile-action-btn records-btn">Full Medical Records</button>
              <button className="profile-action-btn schedule-btn">Schedule Appointment</button>
            </div>
          </div>
        );
      
      case 'People I follow':
        return (
          <div className="profile-details">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src={profile.avatar} alt={profile.name} />
              </div>
              <div className="profile-header-info">
                <h2>{profile.name}</h2>
                <p className="profile-title">{profile.title}</p>
                <p className="profile-specialty">{profile.specialty}</p>
              </div>
            </div>
            
            <div className="profile-section">
              <h3>Research Information</h3>
              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span className="info-label">Institution</span>
                  <span className="info-value">{profile.institution}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Publications</span>
                  <span className="info-value">{profile.publications}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Research Focus</span>
                  <span className="info-value">{profile.researchFocus || 'Neurodegenerative Disorders'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Citations</span>
                  <span className="info-value">{profile.citations || '2,500+'}</span>
                </div>
              </div>
            </div>
            
            <div className="profile-section">
              <h3>Recent Publications</h3>
              <div className="publications-list">
                <div className="publication-item">
                  <h4>Advances in Neural Pathway Mapping for Parkinson's Disease</h4>
                  <p className="publication-journal">Journal of Neuroscience, 2023</p>
                  <p className="publication-abstract">This study explores novel techniques for mapping neural pathways affected by Parkinson's disease, offering new insights into potential treatment approaches.</p>
                </div>
                <div className="publication-item">
                  <h4>Comparative Analysis of Treatment Efficacy in Early-Onset Alzheimer's</h4>
                  <p className="publication-journal">Alzheimer's Research & Therapy, 2022</p>
                  <p className="publication-abstract">A comprehensive review of treatment protocols for early-onset Alzheimer's disease, with statistical analysis of efficacy rates across different demographic groups.</p>
                </div>
                <div className="publication-item">
                  <h4>Neuroplasticity Following Traumatic Brain Injury: A Longitudinal Study</h4>
                  <p className="publication-journal">Brain Injury, 2021</p>
                  <p className="publication-abstract">This longitudinal study examines neuroplasticity patterns in patients recovering from traumatic brain injuries over a five-year period.</p>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="profile-action-btn research-btn">View All Research</button>
              <button className="profile-action-btn contact-btn">Contact Researcher</button>
            </div>
          </div>
        );
      
      case 'Groups':
        return (
          <div className="profile-details">
            <div className="profile-header">
              <div className="profile-avatar group-avatar">
                <img src={profile.avatar} alt={profile.name} />
              </div>
              <div className="profile-header-info">
                <h2>{profile.name}</h2>
                <p className="profile-members">{profile.members}</p>
                <div className="group-meta">
                  <span className="group-type">{profile.type}</span>
                  <span className="group-activity">{profile.activity}</span>
                </div>
              </div>
            </div>
            
            <div className="profile-section">
              <h3>Group Information</h3>
              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span className="info-label">Created</span>
                  <span className="info-value">{profile.created || 'January 2020'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Last Post</span>
                  <span className="info-value">{profile.lastPost}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Privacy</span>
                  <span className="info-value">{profile.privacy || 'Public'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">You Joined</span>
                  <span className="info-value">{profile.joined.replace('Joined ', '')}</span>
                </div>
              </div>
            </div>
            
            <div className="profile-section">
              <h3>About This Group</h3>
              <p className="group-description">
                {profile.description || `${profile.name} is a professional group for medical practitioners to discuss advancements, share case studies, and collaborate on research in the field. The group hosts regular discussions, shares relevant journal articles, and occasionally organizes virtual meetups.`}
              </p>
            </div>
            
            <div className="profile-section">
              <h3>Recent Activity</h3>
              <div className="group-activity-list">
                <div className="activity-item">
                  <div className="activity-avatar">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Member" />
                  </div>
                  <div className="activity-content">
                    <p className="activity-author">Dr. Michael Chen</p>
                    <p className="activity-text">Shared a new research paper on advanced imaging techniques for neurological disorders.</p>
                    <p className="activity-time">Yesterday at 2:45 PM</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-avatar">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Member" />
                  </div>
                  <div className="activity-content">
                    <p className="activity-author">Dr. Sarah Johnson</p>
                    <p className="activity-text">Started a discussion: "Ethical considerations in experimental treatments for rare neurological conditions"</p>
                    <p className="activity-time">3 days ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-avatar">
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Member" />
                  </div>
                  <div className="activity-content">
                    <p className="activity-author">Dr. Robert Williams</p>
                    <p className="activity-text">Posted a case study on a rare presentation of multiple sclerosis in young adults.</p>
                    <p className="activity-time">1 week ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="profile-action-btn post-btn">Create Post</button>
              <button className="profile-action-btn members-btn">View All Members</button>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="profile-details">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src={profile.avatar} alt={profile.name} />
              </div>
              <div className="profile-header-info">
                <h2>{profile.name}</h2>
                <p className="profile-title">{profile.title || 'Medical Professional'}</p>
                <p className="profile-specialty">{profile.specialty || 'General Medicine'}</p>
              </div>
            </div>
            
            <div className="profile-section">
              <h3>Professional Information</h3>
              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span className="info-label">Experience</span>
                  <span className="info-value">{profile.experience || '8+ years'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Institution</span>
                  <span className="info-value">{profile.institution || 'General Hospital'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Location</span>
                  <span className="info-value">{profile.location || 'New York, NY'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">Connections</span>
                  <span className="info-value">{profile.connections || '120+ mutual'}</span>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="profile-action-btn message-btn">Send Message</button>
              <button className="profile-action-btn connect-btn">Connect</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>
          <AiOutlineClose />
        </button>
        {renderProfileContent()}
      </div>
    </div>
  );
};

export default ProfileModal; 