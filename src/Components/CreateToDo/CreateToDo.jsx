import React, { useState } from "react";
import { useHistory } from "react-router";
import "./CreateToDo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../Redux/Slices/TodoSlice";
import { selectIsUserLoggedIn } from "../../Redux/Slices/UserSlice";
const CreateToDo = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    isUserLoggedIn ? submitTodo() : redirectToLogin();
  };
  const submitTodo = () => {
    dispatch(addTodo({ id: Math.round(Math.random() * 100), text: text }));
    setText("");
  };
  const redirectToLogin = () => {
    alert("You must be logged in to add todo item.");
    history.push("/login");
  };
  return (
    <div className="createToDo">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write you todo here..."
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateToDo;
