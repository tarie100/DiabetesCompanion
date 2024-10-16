import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const HbA1cLevel = () => {
  const [hba1c, setHba1c] = useState('');

  const handleInputChange = (e) => {
    setHba1c(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Your HbA1c level is ${hba1c}`);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>HbA1c Level</Card.Title>
        <Form>
          <Form.Group controlId="formHba1c">
            <Form.Label>Enter your HbA1c level</Form.Label>
            <Form.Control
              type="text"
              value={hba1c}
              onChange={handleInputChange}
              placeholder="Enter your HbA1c level"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default HbA1cLevel;
