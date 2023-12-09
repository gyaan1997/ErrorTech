import React from 'react'
import { Form, Button, Table } from 'react-bootstrap';
import './myaccount.css'
import { selectCartItems } from '../Selectors/cartselectors';
import {  useSelector } from 'react-redux';
import { selectUser } from '../Reducers/authSlice';

function MyAccount() {
const username=useSelector(selectUser)
  const cartItems = useSelector(selectCartItems);


  return (
    <div className="myaccount-wrapper background">
      <div className="login-wrapper user-profile-wrapper">
        <Form className="custom-form">
          <h4>Update Password</h4>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder={username }disabled value="" />
          </Form.Group>
          <Form.Group controlId="currentPassword">
            <Form.Label>Current Password:</Form.Label>
            <Form.Control type="password" required value="" />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>New Password:</Form.Label>
            <Form.Control type="password" required value="" />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
           
          </Form.Group>
          <Button className="updateButton" type="submit">
            Update Password
          </Button>
        </Form>
      </div>
      <div className="order-details">
        <Table bordered>
          <caption>Orders Details</caption>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>TIME STAMP</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
          {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.price*1000}</td>
                <td>${item.price}</td>
              
           
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}


export default MyAccount