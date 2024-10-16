import React from 'react';
import { Card } from 'react-bootstrap';

const Motivation = () => {
  const motivationalQuotes = [
    "Keep pushing, you're doing great!",
    "Every step counts, keep moving!",
    "Believe in yourself and all that you are.",
    "Stay positive, stay fighting, stay brave, stay ambitious, stay focused, stay strong."
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Motivation</Card.Title>
        <Card.Text>{getRandomQuote()}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Motivation;
