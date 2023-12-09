import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../Selectors/cartselectors";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Reducers/cartSlice";

import "./cart.css";
import { useNavigate } from "react-router-dom";
function Cart() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <main class="main-content noselect">
      <div class="cart-wrapper noselect">
        <div class="cart-header">
          <h3>Shopping Cart New</h3>
        </div>

        <div class="cart-list">
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.title} - Quantity: {item.quantity}
              </p>
              
              <div className="addRemoveButtons">
              <button class="button1 exclusiveClass" onClick={() => dispatch(increaseQuantity(item))}>
                +
              </button>
              <button class="button2 exclusiveClass" onClick={() => dispatch(decreaseQuantity(item))}>
                -
              </button>
              <button class="button3 exclusiveClass" onClick={() => dispatch(removeFromCart(item))}>
                Delete
              </button>
              </div>
            </div>
            
          ))}
          
        </div>

        <div class="cart-checkout">
          <div class="cart-total">
            <h4>
              Total Amount: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </h4>
          </div>
          <div class="cart-shipping">
            <h4>Shipping : Free</h4>
          </div>
          <div class="cart-checkout-button">
            <button
              className="proceedButton"
              type="button"
              onClick={() => Navigate("/")}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
