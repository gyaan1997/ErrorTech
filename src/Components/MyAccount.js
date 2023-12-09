import React from 'react'
import { Form, Button, Table } from 'react-bootstrap';
import './myaccount.css'
import { selectCartItems } from '../Selectors/cartselectors';
import {  useSelector } from 'react-redux';

function MyAccount() {

  const cartItems = useSelector(selectCartItems);


  return (
    <div className="myaccount-wrapper common-background">
      <div className="login-wrapper user-profile-wrapper">
        <Form>
          <h4>Update Password</h4>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="abc@example.com" disabled value="" />
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
            <div className="eye">
              <Form.Control type="password" required value="" />
              <i>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="eye-slash"
                  className="svg-inline--fa fa-eye-slash fa-w-20 icon"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  {/* ... svg path ... */}
                </svg>
              </i>
            </div>
          </Form.Group>
          <Button className="loginButton" type="submit" disabled>
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
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.price*1000}</td>
                <td>${item.price}</td>
                <td className="actions">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="info-circle"
                  className="svg-inline--fa fa-info-circle fa-w-16 info"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/* ... svg path ... */}
                </svg>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="trash-alt"
                  className="svg-inline--fa fa-trash-alt fa-w-14 delete"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  {/* ... svg path ... */}
                </svg>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}


export default MyAccount