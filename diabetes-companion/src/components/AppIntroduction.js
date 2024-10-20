import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/animations.css';

const AppIntroduction = () => {
  return (
    <div className="intro-section text-center bg-transparent">
      <Container>
        <h1 className="animated fadeInDown text-overlay">Welcome to Diabetes Companion!</h1>
        <p className="lead animated fadeInUp text-overlay">
          Feeling like a sugar detective? 🕵️‍♂️ Join us on a journey to crack the code of diabetes management with a sprinkle of humor and a dash of motivation!
        </p>
        <p className="animated fadeInUp delay-1s text-overlay">
          Our app is your trusty sidekick in the quest for better health. Set reminders, track your HbA1c levels, and stay motivated with daily quotes. Ready to become a diabetes superhero? 🦸‍♀️🦸‍♂️
        </p>
      </Container>
    </div>
  );
};

export default AppIntroduction;
