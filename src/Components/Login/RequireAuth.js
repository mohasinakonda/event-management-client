import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.config";
// import Spinner from '../Shared/Spinner';

const RequireAuth = ({ children }) => {
  const [user, Loading] = useAuthState(auth);
  const location = useLocation();
  if (Loading) {
    return <p className="text-center text-xl font-bolt">Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <div className="text-center text-2xl">please verify your email</div>;
  }
  return children;
};

export default RequireAuth;
