import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API_ENDPOINTS from "../apiConfig";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../Reducers/authSlice";
import './login.css'
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null); //
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const response = await axios.post(API_ENDPOINTS.login, {
        username: "mor_2314",
        password: "83r5^_",
      });

      console.log(response.data);
      dispatch(loginUser(response.data));
      navigate("/");
    } catch (error) {
      console.error("Error:", error.message);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  // const handleLogOut = () => {
  //   dispatch(logoutUser());
  //   // Additional logic, such as navigating to the login page
  // };

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <Form className="common-background">
        <h2>Login</h2>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label>Password:</Form.Label>
        <div className="eye">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="loginButton" type="button" onClick={handleLogIn}>
          Login
        </Button>
      </Form>
      </div>

  );
}

export default Login;
