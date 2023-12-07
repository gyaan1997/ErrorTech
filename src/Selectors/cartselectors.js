// cartSelectors.js
import { createSelector } from 'reselect';
const selectCartState = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  (cart) => cart?.cartItems || []
);