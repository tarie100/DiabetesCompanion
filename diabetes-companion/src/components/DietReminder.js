import React from 'react';
import { useDispatch } from 'react-redux';
import { setReminder } from '../actions/reminderActions';
import 'bootstrap/dist/css/bootstrap.min.css';


const DietReminder = () => {
  const dispatch = useDispatch();

  const handleSetReminder = () => {
    dispatch(setReminder('diet', 'Time to eat right!'));
  };

  return (
    <div>
      <h2>Diet Reminder</h2>
      <button onClick={handleSetReminder}>Set Diet Reminder</button>
    </div>
  );
};

export default DietReminder;
