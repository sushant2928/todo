import { useState } from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ children, ...rest }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isUserLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
