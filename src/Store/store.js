import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Reducers/cartSlice'; // Import the reducer from cartSlice

const store = configureStore({
  reducer: {
    cart: cartSlice, // Use the reducer from cartSlice
    // Add other reducers if needed
  },
});

export default store;
