import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const PrivateRouter = () => {
  const { currentUser, loading } = useContext(AuthContext); // Get current user and loading state

  if (loading) {
    return <div>Loading...</div>; // Show loading state while auth state is being checked
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />; // Redirect to login if not authenticated
};

export default PrivateRouter;
