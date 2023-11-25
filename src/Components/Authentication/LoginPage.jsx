import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);

  if (authenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};
export default LoginPage;
