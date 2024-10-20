import React from 'react';
import { useDispatch } from 'react-redux';
import { setReminder } from '../actions/reminderActions';
import { Button, Card } from 'react-bootstrap';

const DietReminder = () => {
  const dispatch = useDispatch();

  const handleSetReminder = () => {
    dispatch(setReminder('diet', 'Time to eat right!'));
  };

  return (
    <Card className="mb-3 bg-transparent">
      <Card.Body>
        <Card.Title>Diet Reminder</Card.Title>
        <Button variant="success" onClick={handleSetReminder}>Set Diet Reminder</Button>
      </Card.Body>
    </Card>
  );
};

export default DietReminder;
