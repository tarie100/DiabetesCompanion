import React from 'react';
import { useDispatch } from 'react-redux';
import { setReminder } from '../actions/reminderActions';
import { Button, Card } from 'react-bootstrap';

const WaterReminder = () => {
  const dispatch = useDispatch();

  const handleSetReminder = () => {
    dispatch(setReminder('water', 'Time to drink water!'));
  };

  return (
    <Card className="mb-3 bg-transparent">
      <Card.Body>
        <Card.Title>Water Reminder</Card.Title>
        <Button variant="info" onClick={handleSetReminder}>Set Water Reminder</Button>
      </Card.Body>
    </Card>
  );
};

export default WaterReminder;
