import React, { useState } from 'react';
import './Messages.css';
import { AiOutlineSearch, AiOutlineSend, AiOutlineSmile, AiOutlinePaperClip, AiOutlineCode, AiOutlineVideoCamera, AiOutlineMore, AiOutlineArrowLeft } from 'react-icons/ai';
import LoadingSpinner from '../components/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  const [activeTab, setActiveTab] = useState('Channels');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  // Sample messages data
  const messages = [
    {
      id: 1,
      sender: 'Penn Hospital administration',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipis...',
      time: '7:31',
    },
    {
      id: 2,
      sender: 'Pharmaceutical association, Ohio',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipis...',
      time: '7:31',
      members: '132 from 13.k members',
      status: 'Online'
    },
    {
      id: 3,
      sender: 'Tech in Medicine',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipis...',
      time: '7:31',
    }
  ];
  
  // Sample channels data
  const channels = [
    {
      id: 1,
      name: 'Penn Hospital administration',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipis...',
      time: '7:31',
    },
    {
      id: 2,
      name: 'Pharmaceutical association, Ohio',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipis...',
      time: '7:31',
      members: '132 from 13.k members',
      status: 'Online'
    },
    {
      id: 3,
      name: 'Tech in Medicine',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipis...',
      time: '7:31',
    }
  ];

  // Sample chat messages
  const chatMessages = [
    {
      id: 1,
      sender: 'Dr. John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '7:31',
      isCurrentUser: false
    },
    {
      id: 2,
      sender: 'Dr. Jane Doe',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '7:35',
      isCurrentUser: false
    },
    {
      id: 3,
      sender: 'You',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '7:40',
      isCurrentUser: true
    },
    {
      id: 4,
      sender: 'Dr. John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '7:45',
      isCurrentUser: false
    },
    {
      id: 5,
      sender: 'You',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      isVoiceMessage: true,
      duration: '0:45',
      time: '7:50',
      isCurrentUser: true
    }
  ];

  const handleMessageClick = (message) => {
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      setSelectedMessage(message);
      setLoading(false);
    }, 1000);
  };

  const handleBackClick = () => {
    setSelectedMessage(null);
  };
  
  const handleNavigateBack = () => {
    navigate(-1); // Navigate back to previous page
  };
  
  return (
    <div className="messages-page-container">
      {loading && <LoadingSpinner />}
      
      <div className="messages-header">
        <button className="back-button" onClick={handleNavigateBack}>
          <AiOutlineArrowLeft />
        </button>
        <h2>Messages</h2>
      </div>
      
      {selectedMessage ? (
        <div className="message-detail-view">
          <div className="message-detail-header">
            <button className="back-button" onClick={handleBackClick}>
              <AiOutlineArrowLeft />
            </button>
            <div className="message-detail-info">
              <div className="message-detail-avatar">
                <img src={selectedMessage.avatar} alt={selectedMessage.sender || selectedMessage.name} />
              </div>
              <div className="message-detail-title">
                <h3>{selectedMessage.sender || selectedMessage.name}</h3>
                {selectedMessage.members && (
                  <p className="message-detail-subtitle">
                    <span className="member-count">{selectedMessage.members}</span>
                    <span className="online-status">{selectedMessage.status}</span>
                  </p>
                )}
              </div>
            </div>
            <div className="message-detail-actions">
              <button className="action-button">
                <AiOutlineVideoCamera />
              </button>
              <button className="action-button">
                <AiOutlineMore />
              </button>
            </div>
          </div>
          
          <div className="message-detail-content">
            {chatMessages.map(msg => (
              <div key={msg.id} className={`chat-message ${msg.isCurrentUser ? 'outgoing' : 'incoming'}`}>
                {!msg.isCurrentUser && (
                  <div className="chat-avatar">
                    <img src={msg.avatar} alt={msg.sender} />
                  </div>
                )}
                <div className="chat-bubble">
                  {!msg.isVoiceMessage ? (
                    <p>{msg.message}</p>
                  ) : (
                    <div className="voice-message">
                      <button className="play-button">▶</button>
                      <div className="voice-waveform">
                        {Array(20).fill().map((_, i) => (
                          <div key={i} className="waveform-bar" style={{ height: `${Math.random() * 15 + 5}px` }}></div>
                        ))}
                      </div>
                      <span className="voice-duration">{msg.duration}</span>
                    </div>
                  )}
                  <span className="chat-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="message-input-container">
            <input type="text" placeholder="Type a message..." className="message-input" />
            <div className="message-actions-toolbar">
              <button className="toolbar-btn">
                <AiOutlineSmile />
              </button>
              <button className="toolbar-btn">
                <AiOutlinePaperClip />
              </button>
              <button className="toolbar-btn send-btn">
                <AiOutlineSend />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="messages-search">
            <AiOutlineSearch className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          
          <div className="messages-tabs">
            <button 
              className={`tab-button ${activeTab === 'Direct' ? 'active' : ''}`}
              onClick={() => setActiveTab('Direct')}
            >
              Direct
            </button>
            <button 
              className={`tab-button ${activeTab === 'Channels' ? 'active' : ''}`}
              onClick={() => setActiveTab('Channels')}
            >
              Channels
            </button>
          </div>
          
          <div className="messages-list">
            {activeTab === 'Direct' ? (
              messages.map(message => (
                <div 
                  key={message.id} 
                  className="message-item"
                  onClick={() => handleMessageClick(message)}
                >
                  <div className="message-avatar">
                    <img src={message.avatar} alt={message.sender} />
                  </div>
                  <div className="message-content">
                    <div className="message-header">
                      <h3 className="message-sender">{message.sender}</h3>
                      <span className="message-time">{message.time}</span>
                    </div>
                    <p className="message-text">{message.message}</p>
                  </div>
                </div>
              ))
            ) : (
              channels.map(channel => (
                <div 
                  key={channel.id} 
                  className="message-item"
                  onClick={() => handleMessageClick(channel)}
                >
                  <div className="message-avatar">
                    <img src={channel.avatar} alt={channel.name} />
                  </div>
                  <div className="message-content">
                    <div className="message-header">
                      <h3 className="message-sender">{channel.name}</h3>
                      <span className="message-time">{channel.time}</span>
                    </div>
                    <p className="message-text">{channel.message}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Messages;