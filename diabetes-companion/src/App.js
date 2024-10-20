import React from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './store';
import ExerciseReminder from './components/ExerciseReminder';
import DietReminder from './components/DietReminder';
import WaterReminder from './components/WaterReminder';
import HbA1cLevel from './components/HbA1cLevel';
import Motivation from './components/Motivation';

const App = () => {
  return (
    <Provider store={store}>
      <div className="background-section">
        <Container className="mt-5">
          <h1 className="text-center mb-4">Diabetes Companion App</h1>
          <ExerciseReminder />
          <DietReminder />
          <WaterReminder />
          <HbA1cLevel />
          <Motivation />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
