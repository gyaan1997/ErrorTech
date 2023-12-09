import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Reducers/cartSlice'; 
import authSlice from '../Reducers/authSlice'
const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth:authSlice,
  },
});

export default store;
