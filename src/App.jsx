import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import './App.css';

const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem('userInfo');
    return saved ? JSON.parse(saved) : { name: '', email: '' };
  });

  const checkFullScreen = () => {
    if (!document.fullscreenElement) {
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', checkFullScreen);
    return () => {
      document.removeEventListener('fullscreenchange', checkFullScreen);
    };
  }, []);

  const enterFullScreen = () => {
    document.documentElement.requestFullscreen().then(() => {
      setIsFullScreen(true);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleStartQuiz = () => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    enterFullScreen();
  };

  return (
    <div className="app">
      {!isFullScreen ? (
        <div className="fullscreen-prompt">
          <div className="user-info">
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
            <button className="fullscreen-button" onClick={handleStartQuiz}>
              Enter Full Screen to Start Quiz
            </button>
          </div>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
};

export default App;
