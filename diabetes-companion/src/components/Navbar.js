import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Diabetes Companion</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/exercise">Exercise Reminder</Nav.Link>
          <Nav.Link as={NavLink} to="/diet">Diet Reminder</Nav.Link>
          <Nav.Link as={NavLink} to="/water">Water Reminder</Nav.Link>
          <Nav.Link as={NavLink} to="/hba1c">HbA1c Level</Nav.Link>
          <Nav.Link as={NavLink} to="/motivation">Motivation</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
