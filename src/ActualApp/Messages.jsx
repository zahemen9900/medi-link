import React, { useState } from 'react';
import './Messages.css';
import { AiOutlineSearch, AiOutlineSend, AiOutlineSmile, AiOutlinePaperClip, AiOutlineCode } from 'react-icons/ai';

const Messages = () => {
  const [activeTab, setActiveTab] = useState('Channels');
  
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
    },
    {
      id: 3,
      name: 'Tech in Medicine',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipis...',
      time: '7:31',
    }
  ];
  
  return (
    <div className="messages-page-container">
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
            <div key={message.id} className="message-item">
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
            <div key={channel.id} className="message-item">
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
      
      <div className="message-input-container">
        <div className="message-actions-toolbar">
          <button className="toolbar-btn send-btn">
            <AiOutlineSend />
          </button>
          <button className="toolbar-btn">
            <AiOutlineSmile />
          </button>
          <button className="toolbar-btn">
            <AiOutlinePaperClip />
          </button>
          <button className="toolbar-btn">
            <AiOutlineCode />
          </button>
          <button className="toolbar-btn edit-btn">
            Ask to edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages; 