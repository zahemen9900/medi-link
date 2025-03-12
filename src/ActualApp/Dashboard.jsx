import React, { useState } from "react";
import "./Dashboard.css";
import Events from "./Events";
import Documents from "./Documents";
import Network from "./Network";
import Messages from "./Messages";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineFile,
  AiOutlineTeam,
  AiOutlineMail,
  AiOutlineBell,
  AiOutlineCamera,
  AiOutlineFileText,
  AiOutlineVideoCamera,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineCheck,
  AiOutlineLike,
  AiOutlineArrowRight,
  AiOutlineClockCircle,
  AiOutlineDown,
  AiOutlinePlus,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa6";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedWeek, setSelectedWeek] = useState("Weeks");
  
  // Get current date information
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Generate calendar days for the current week
  const generateCalendarDays = () => {
    const today = new Date(currentYear, currentMonth, currentDay);
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Calculate the Monday of the current week (start with Sunday as first day)
    const sundayOffset = dayOfWeek === 0 ? 0 : -dayOfWeek; // If Sunday, stay on Sunday, otherwise go back to previous Sunday
    const sunday = new Date(today);
    sunday.setDate(today.getDate() + sundayOffset);
    
    // Generate array of dates for the week
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(sunday);
      day.setDate(sunday.getDate() + i);
      weekDays.push({
        date: day.getDate(),
        day: i, // 0 = Sunday, 1 = Monday, etc.
        isToday: day.getDate() === currentDay && 
                 day.getMonth() === currentMonth && 
                 day.getFullYear() === currentYear
      });
    }
    
    return weekDays;
  };
  
  const calendarDays = generateCalendarDays();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Sample invitation data
  const invitations = [
    {
      id: 1,
      name: "Edward Jackson",
      title: "MD, Neurology",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      accepted: true
    }
  ];
  
  // Sample messages data
  const messages = [
    {
      id: 1,
      name: "Jane Deer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      message: "Lorem ipsum dolor sit amet, consectetur sdsfc ...",
      time: "7:31"
    },
    {
      id: 2,
      name: "Jane Deer",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      message: "Lorem ipsum dolor sit amet, consectetur sdsfc ...",
      time: "7:31"
    }
  ];
  
  // Sample appointments data
  const appointments = [
    {
      id: 1,
      type: "Consultation",
      date: "Today",
      time: "9:00 AM",
      patient: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      type: "Follow-up",
      date: "Today",
      time: "11:30 AM",
      patient: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 3,
      type: "Surgery",
      date: "Tomorrow",
      time: "10:00 AM",
      patient: "Michael Brown",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg"
    }
  ];
  
  // Function to render the active component based on the selected tab
  const renderActiveComponent = () => {
    switch (activeTab) {
      case "calendar":
        return <Events />;
      case "documents":
        return <Documents initialSection="appointments" />;
      case "network":
        return <Network />;
      case "messages":
        return <Messages />;
      default:
        return renderHomeContent();
    }
  };
  
  // Function to render home content
  const renderHomeContent = () => {
    return (
      <div className="dashboard-content">
        <div className="left-column">
          <h2 className="section-title">General Information</h2>
          
          <div className="general-info-card">
            <div className="post-creation">
              <div className="post-input">
                <span className="post-icon"><AiOutlineFileText /></span>
                <input type="text" placeholder="Start a post..." />
              </div>
              <div className="post-actions">
                <button className="action-btn">
                  <AiOutlineCamera />
                  <span>Photos</span>
                </button>
                <button className="action-btn">
                  <AiOutlineFileText />
                  <span>Articles</span>
                </button>
                <button className="action-btn">
                  <AiOutlineCalendar />
                  <span>Events</span>
                </button>
                <button className="action-btn">
                  <AiOutlineVideoCamera />
                  <span>Videos</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="info-cards-container">
            <div className="connections-card">
              <h2 className="connection-count">142</h2>
              <p className="connection-label">Connections</p>
            </div>
            
            <div className="invitations-card">
              <h3 className="card-title">Invitations</h3>
              <div className="invitation-list">
                {invitations.map(invitation => (
                  <div key={invitation.id} className="invitation-item">
                    <img src={invitation.avatar} alt={invitation.name} className="invitation-avatar" />
                    <div className="invitation-details">
                      <h4 className="invitation-name">{invitation.name}</h4>
                      <p className="invitation-title">{invitation.title}</p>
                    </div>
                    {invitation.accepted && (
                      <div className="invitation-status accepted">
                        <AiOutlineCheck />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <a href="#" className="view-all-link">View all</a>
            </div>
          </div>
          
          {/* Post Card */}
          <div className="post-card">
            <div className="post-header">
              <img 
                src="https://randomuser.me/api/portraits/men/75.jpg" 
                alt="Dr Jeffery" 
                className="post-avatar" 
              />
              <div className="post-author-info">
                <h4 className="post-author-name">Dr Jeffery dahmar</h4>
                <p className="post-meta">June 12, 2020, 15:30, Europe</p>
              </div>
            </div>
            
            <div className="post-content">
              <h3 className="post-title">Healthy Organic Recipes for High blood Pressure.</h3>
              <div className="post-body">
                <div className="post-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                    alt="Healthy food" 
                    className="post-image" 
                  />
                </div>
                <div className="post-text">
                  <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>
                  <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt</p>
                </div>
              </div>
            </div>
            
            <div className="post-actions-bar">
              <div className="post-action">
                <AiOutlineLike className="post-action-icon" />
                <span>1234 Likes</span>
              </div>
              <div className="post-action">
                <AiOutlineComment className="post-action-icon" />
                <span>240 Comments</span>
              </div>
              <div className="post-action">
                <AiOutlineShareAlt className="post-action-icon" />
                <span>20 Shares</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="right-column">
          {/* User Profile */}
          <div className="user-profile">
            <img 
              src="https://randomuser.me/api/portraits/men/85.jpg" 
              alt="Dr Krishna" 
              className="user-profile-avatar" 
            />
            <div className="user-profile-badge">
              <span>+3</span>
            </div>
            <h3 className="user-profile-greeting">Hey, Krishna</h3>
          </div>
          
          {/* Appointments Section */}
          <div className="appointments-section">
            <div className="appointments-header">
              <h3 className="sidebar-section-title">Appointments</h3>
              <div className="week-selector">
                <button className="week-dropdown">
                  {selectedWeek} <AiOutlineDown />
                </button>
              </div>
            </div>
            
            {/* Calendar */}
            <div className="calendar-container">
              <div className="calendar-header">
                {dayNames.map((name, index) => (
                  <span 
                    key={index}
                    className={calendarDays.find(day => day.day === index)?.isToday ? "active-day-header" : ""}
                  >
                    {name}
                  </span>
                ))}
              </div>
              <div className="calendar-days">
                {calendarDays.map((day, index) => (
                  <span 
                    key={index} 
                    className={day.isToday ? "active-day" : ""}
                  >
                    {day.date}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Appointments List */}
            <div className="appointments-list">
              {appointments.map(appointment => (
                <div key={appointment.id} className="appointment-card">
                  <div className={`appointment-left-bar ${appointment.type.toLowerCase()}`}></div>
                  <div className="appointment-content">
                    <div className={`appointment-type-button ${appointment.type.toLowerCase()}`}>
                      {appointment.type}
                    </div>
                    <div className="appointment-info">
                      <div className="appointment-date-time">
                        <div className="appointment-date">{appointment.date}</div>
                        <div className="appointment-time">{appointment.time}</div>
                      </div>
                      <div className="appointment-patient-info">
                        <img 
                          src={appointment.avatar} 
                          alt={appointment.patient} 
                          className="appointment-avatar" 
                        />
                        <span className="appointment-patient-name">{appointment.patient}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="view-all-appointments" onClick={navigateToAppointments}>
              <span>View all appointment</span>
            </button>
          </div>
          
          {/* Messages Section */}
          <div className="messages-section">
            <h3 className="sidebar-section-title">Messages</h3>
            <div className="messages-container">
              {messages.map((message, index) => (
                <React.Fragment key={message.id}>
                  <div className="message-item">
                    <img 
                      src={message.avatar} 
                      alt={message.name} 
                      className="message-avatar" 
                    />
                    <div className="message-content">
                      <div className="message-header">
                        <span className="message-sender">{message.name}</span>
                        <span className="message-time">{message.time}</span>
                      </div>
                      <p className="message-preview">{message.message}</p>
                    </div>
                    <button className="message-action-button">
                      <AiOutlinePlus />
                    </button>
                  </div>
                  {index < messages.length - 1 && <div className="message-divider"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Function to navigate to appointments tab
  const navigateToAppointments = () => {
    setActiveTab("documents");
  };

  return (
    <div className="dashboard">
      <nav className="top-nav">
        <div className="nav-left">
          <h2 className="logo">Medi-Link</h2>
        </div>
        <div className="nav-center">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="nav-right">
          <div className="notification">
            <span className="notification-icon">
              <AiOutlineBell />
            </span>
          </div>
          <div className="profile">
            <img
              src="https://randomuser.me/api/portraits/men/85.jpg"
              alt="Profile"
              className="profile-image"
            />
            <span className="profile-text">Dr Krishna</span>
            <span className="profile-arrow">▼</span>
          </div>
        </div>
      </nav>
      
      <div className="main-wrapper">
        <div className="sidebar">
          <div
            className={`nav-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            <span className="nav-icon">
              <AiOutlineHome />
            </span>
            <span className="nav-text">Home</span>
          </div>
          <div
            className={`nav-item ${activeTab === "calendar" ? "active" : ""}`}
            onClick={() => setActiveTab("calendar")}
          >
            <span className="nav-icon">
              <AiOutlineCalendar />
            </span>
            <span className="nav-text">Calendar</span>
          </div>
          <div
            className={`nav-item ${activeTab === "documents" ? "active" : ""}`}
            onClick={() => setActiveTab("documents")}
          >
            <span className="nav-icon">
              <AiOutlineFileText />
            </span>
            <span className="nav-text">Documents</span>
          </div>
          <div
            className={`nav-item ${activeTab === "network" ? "active" : ""}`}
            onClick={() => setActiveTab("network")}
          >
            <span className="nav-icon">
              <AiOutlineUsergroupAdd />
            </span>
            <span className="nav-text">Network</span>
          </div>
          <div
            className={`nav-item ${activeTab === "messages" ? "active" : ""}`}
            onClick={() => setActiveTab("messages")}
          >
            <span className="nav-icon">
              <AiOutlineMail />
            </span>
            <span className="nav-text">Messages</span>
          </div>
        </div>
        
        <div className="main-content">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
