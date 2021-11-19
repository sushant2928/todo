import React from "react";
import "./ToDoItem.css";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../Redux/Slices/TodoSlice";
const ToDoItem = ({ todo }) => {
  let dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(removeTodo(todo.id));
  };
  return (
    <div className="toDoItem">
      <li className>{todo.text}</li>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default ToDoItem;
