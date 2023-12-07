import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API_ENDPOINTS from '../apiConfig';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Signed up successfully!');
        navigate('/');
      } else {
        const data = await response.json();
        console.error('error reg user', data.error);
      }
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <Card className='SignUp'>
      <Card.Body>
        <Card.Title>SignUp</Card.Title>
        <Form style={{ width: '60%' }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={handleSignUp}
            style={{ marginTop: 16 }}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignUp;
