import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API_ENDPOINTS from '../apiConfig';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../Reducers/authSlice';
import './login.css'
function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch=useDispatch();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(API_ENDPOINTS.login, {
        username: 'mor_2314',
        password:  "83r5^_",
      });

      console.log(response.data);
      dispatch(signUpUser(response.data)); 

      navigate('/login');
      alert("SignUp successful!");
    } catch (error) {
      console.error('Error:', error.message);
      if (error.response) {
     
        console.error('Server responded with:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
      
        console.error('No response received from the server');
      } else {
        console.error('Error setting up the request:', error.message);
      }
      alert("SignUp failed. Please try again.");

    }
  };
  
  return (
   
  <div  className="d-flex justify-content-center align-items-center vh-100">   
     <Form className="common-background">
        <h2>SignUp</h2>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label>Password:</Form.Label>
        <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <Form.Label>Confirm password:</Form.Label>
            <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <Button className="loginButton" type="button" onClick={handleSignUp}>
          SignUp
        </Button>
      </Form>
      </div>

    );
}

export default SignUp;
