import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
        const token = user.token;
        if (token) return true;
    }
    return false;
  };
  return (

    <Route
      {...rest}
      render={props =>
        isLogin() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
