import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/UserSlice";
import "./Login.css";
const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("xyz@gmail.com");
  const [password, setPassword] = useState("123456");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    history.replace("/");
  };
  return (
    <div className="login">
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="email"></label>
        <input name="email" type="email" required disabled value={email} />
        <label htmlFor="password"></label>
        <input
          name="password"
          type="password"
          required
          disabled
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
