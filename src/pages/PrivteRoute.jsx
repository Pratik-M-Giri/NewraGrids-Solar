import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken"); // JWT token check
  if (!token) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default PrivateRoute;
