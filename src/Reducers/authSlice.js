// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },

    logoutUser: (state) => {
      state.user = null;
    },
    signUpUser: (state, action) => {
        state.user = action.payload;
      },
     
  },
});

export const { loginUser, logoutUser ,signUpUser} = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state) => state.auth.user;
