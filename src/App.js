import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import ToDo from "./Pages/ToDo/ToDo";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact>
            <ToDo />
          </Route>

          <PrivateRoute path="/login">
            <Login />
          </PrivateRoute>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
