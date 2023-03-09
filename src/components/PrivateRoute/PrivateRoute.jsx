import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const access_token = useSelector((state) => state.auth.access_token);
  return access_token ? <Outlet /> : <Navigate to="/login" />;
};
