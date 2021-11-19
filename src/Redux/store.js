import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import todoReducer from "./Slices/TodoSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});
