// Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../Selectors/cartselectors';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Reducers/cartSlice';

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart Details</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title} - Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item))}>Delete</button>
        </div>
      ))}
      <p>Total Amount: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
    </div>
  );
}

export default Cart;
