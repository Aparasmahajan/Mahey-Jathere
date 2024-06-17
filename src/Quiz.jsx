import React, { useEffect, useState } from 'react';
import questions from './questions.json';
import './Quiz.css';

const Quiz = ({ userData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(() => parseInt(localStorage.getItem('currentQuestion')) || 0);
  const [timeLeft, setTimeLeft] = useState(() => parseInt(localStorage.getItem('timeLeft')) || 600);
  const [selectedOptions, setSelectedOptions] = useState(() => JSON.parse(localStorage.getItem('selectedOptions')) || {});
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setQuizCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('currentQuestion', currentQuestion);
    localStorage.setItem('timeLeft', timeLeft);
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [currentQuestion, timeLeft, selectedOptions]);

  const handleOptionClick = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted || currentQuestion >= questions.length) {
    return (
      <div className="quiz-completed">
        <h2>Quiz Submitted!</h2>
        <p>Thank you for completing the quiz. We will contact you shortly.</p>
        <p>Please provide your feedback below:</p>
        <textarea placeholder="Enter your feedback here..."></textarea>
        <button>Submit Feedback</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="timer">
        Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
      </div>
      <div className="question">
        <h3>{questions[currentQuestion].question}</h3>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOptions[currentQuestion] === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
