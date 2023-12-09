// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};


const cartSlice = createSlice({
  name: 'cart',
  initialState: loadState() || { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      saveState(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      saveState(state);
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      saveState(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveState(state);
    },
    loginUser:(state,action)=>{
      state.user=action.payload;
      saveState(state);
    },
    signUpUser:(state,action)=>{
      state.user=action.payload;
      saveState(state);
    }

    
  },
});

// Selector to get the cartItems from the state
export const selectCartItems = (state) => state.cart.cartItems;

// // Create a memoized selector using createSelector
// export const selectCartItemsMemoized = createSelector(
//   [selectCartItems],
//   (cartItems) => cartItems || []
// );

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: loadState() || { cartItems: [] },
//   reducers: {
//     // ... existing reducers
//   },
// });

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
