import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ children} ) {
    if (!localStorage.getItem("authToken")) {
      return <Navigate to="/sign-in" replace />;
    }
    return children ? children : <Outlet />;
}

export default PrivateRoute