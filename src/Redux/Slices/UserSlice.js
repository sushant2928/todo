import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isUserLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isUserLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
    },
  },
});
export const { login, logout } = userSlice.actions;
export const selectIsUserLoggedIn = (state) => state.user.isUserLoggedIn;
export default userSlice.reducer;
