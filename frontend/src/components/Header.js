import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaBell, FaCog } from 'react-icons/fa'; 
import { HiMenu } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(Math.floor((new Date() - startTime) / 1000));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, startTime]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimerClick = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
    } else {
      setStartTime(new Date());
      setIsTimerRunning(true);
      setTimer(0);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <HiMenu className="menu-icon animate" />
        <span className="header-logo">DB4CLOUD</span>
      </div>

      <div className="header-center">
        <button
          className={`timer-button ${isTimerRunning ? 'active' : ''}`}
          onClick={handleTimerClick}
          title={isTimerRunning ? "Click to check-out" : "Click to check-in"}
        >
          {isTimerRunning ? (
            <>
              <FontAwesomeIcon icon={faSignOutAlt} flip className="timer-icon rotate" />
              <span>{`Checked in... ${formatTime(timer)}`}</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faSignInAlt} beat className="timer-icon" />
              <span>Check-in</span>
            </>
          )}
        </button>
      </div>

      <div className="header-right">
        <FaCog className="header-icon icon-animate" title="Settings" />
        <FaBell className="header-icon notification-icon icon-animate" title="Notifications" />
        <MdLanguage className="header-icon icon-animate" title="Language" />
        
        <div className="user-profile">
          <span className="user-initials">S</span>
          <span className="user-name">Subikshan</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
