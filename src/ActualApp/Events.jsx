import React, { useState } from "react";
import "./Events.css";

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1);
      return newDate;
    });
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const formatMonthYear = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="events-container">
      <div className="latest-announcement">
        <h2>Latest Announcement</h2>
        <div className="announcement-content">
          <p>(No announcements have been posted)</p>
        </div>
      </div>

      <div className="reminders-section">
        <div className="reminders-header">
          <h2>Reminders</h2>
          <div className="reminders-filters">
            <select className="time-filter">
              <option>Next 7 days</option>
              <option>Next 30 days</option>
              <option>All</option>
            </select>
            <select className="sort-filter">
              <option>Sort by</option>
              <option>Date</option>
              <option>Priority</option>
            </select>
            <input
              type="text"
              placeholder="Search by name"
              className="search-filter"
            />
          </div>
        </div>
      </div>

      <div className="calendar-section">
        <div className="calendar-header">
          <button className="nav-btn" onClick={handlePreviousMonth}>Previous</button>
          <h2>{formatMonthYear(currentDate)}</h2>
          <button className="nav-btn" onClick={handleNextMonth}>Next month</button>
        </div>
        <div className="calendar-grid">
          <div className="calendar-days-header">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
          <div className="calendar-dates">
            {Array.from({ length: getDaysInMonth(currentDate) }, (_, i) => (
              <div key={i + 1} className={`date-cell ${i + 1 === 15 ? 'has-event' : ''}`}>
                <span className="date-number">{i + 1}</span>
                {i + 1 === 15 && (
                  <div className="event-indicator">
                    <span className="event-dot"></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;