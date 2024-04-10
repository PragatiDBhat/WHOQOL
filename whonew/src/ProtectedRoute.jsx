// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ auth, redirectTo, ...props }) => {
  return auth ? <Route {...props} /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
