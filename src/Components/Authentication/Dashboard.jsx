import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Link to="/home">
        <h3>HOME</h3>
      </Link>
      <Link to="/login">
        <h3>LOGIN</h3>
      </Link>
    </div>
  );
};

export default Dashboard;
