import { combineReducers } from 'redux';
import cartSlice from './cartSlice';

const rootReducer = combineReducers({
  cart: cartSlice,
  // Add other reducers if needed
});

export default rootReducer;