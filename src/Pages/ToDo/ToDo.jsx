import React, { useState } from "react";
import CreateToDo from "../../Components/CreateToDo/CreateToDo";
import ToDoItem from "../../Components/ToDoItem/ToDoItem";
import "./ToDo.css";
import { useDispatch, useSelector } from "react-redux";
import { selectToDo } from "../../Redux/Slices/TodoSlice";
const ToDo = () => {
  let todos = useSelector(selectToDo);
  return (
    <div className="todo">
      <CreateToDo />
      <ul className="todo__list">
        {todos && todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
};

export default ToDo;
