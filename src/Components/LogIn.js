import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API_ENDPOINTS from '../apiConfig';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const body = JSON.stringify({ email, password });

      const response = await fetch(API_ENDPOINTS.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (response.ok) {
        const { token } = await response.json();

        localStorage.setItem('jwtToken', token);
        Navigate('./analytics');
      } else if (response.status === 401) {
        setErrorMessage('User not signed up. Please create an account.');
        setIsLoggedIn(true);
      } else {
        console.error('Authentication failed');
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error during authentication', error);
      setIsLoggedIn(false);
    }
  };

  return (
    <Card className='login-card'>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        {errorMessage && (
          <p style={{ color: 'red', marginBottom: isLoggedIn ? '16px' : '0' }}>
            {errorMessage}
          </p>
        )}
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
            onClick={handleLogin}
            style={{ marginTop: 16 }}
          >
            Login
          </Button>

          <p style={{ marginTop: 16, cursor: 'pointer' }} onClick={() => { Navigate('/signup') }}>
            New Registration?
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;
