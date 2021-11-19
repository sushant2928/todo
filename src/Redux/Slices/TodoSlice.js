import { createSlice } from "@reduxjs/toolkit";
import { findItemIndex } from "../../utils";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    removeTodo: (state, action) => {
      let todoCopy = [...state.todo];
      todoCopy.splice(findItemIndex(todoCopy, action.payload), 1);
      state.todo = [...todoCopy];
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export const selectToDo = (state) => state.todo.todo;

export default todoSlice.reducer;
