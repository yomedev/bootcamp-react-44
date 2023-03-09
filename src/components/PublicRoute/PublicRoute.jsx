import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";

export const PublicRoute = () => {
  const location = useLocation()
  const access_token = useSelector((state) => state.auth.access_token);
  return !access_token ? <Outlet /> : <Navigate to={location.state?.fromLogin ? location.state.fromLogin : '/posts'}/>;
};
