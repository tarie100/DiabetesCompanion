import React from 'react';
import { useDispatch } from 'react-redux';
import { setReminder } from '../actions/reminderActions';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ExerciseReminder = () => {
  const dispatch = useDispatch();

  const handleSetReminder = () => {
    dispatch(setReminder('exercise', 'Time to exercise!'));
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Exercise Reminder</Card.Title>
        <Button variant="primary" onClick={handleSetReminder}>Set Exercise Reminder</Button>
      </Card.Body>
    </Card>
  );
};

export default ExerciseReminder;
