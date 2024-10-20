import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ExerciseReminder from './components/ExerciseReminder';
import DietReminder from './components/DietReminder';
import WaterReminder from './components/WaterReminder';
import HbA1cLevel from './components/HbA1cLevel';
import Motivation from './components/Motivation';
import AppIntroduction from './components/AppIntroduction';
import NavigationBar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <div className="background-section">
        <NavigationBar />
        <Container className="mt-5">
          <Routes>
            <Route path="/" element={<AppIntroduction />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/exercise" element={<PrivateRoute><ExerciseReminder /></PrivateRoute>} />
            <Route path="/diet" element={<PrivateRoute><DietReminder /></PrivateRoute>} />
            <Route path="/water" element={<PrivateRoute><WaterReminder /></PrivateRoute>} />
            <Route path="/hba1c" element={<PrivateRoute><HbA1cLevel /></PrivateRoute>} />
            <Route path="/motivation" element={<PrivateRoute><Motivation /></PrivateRoute>} />
          </Routes>
        </Container>
      </div>
    </Provider>
  );
};

export default App;
