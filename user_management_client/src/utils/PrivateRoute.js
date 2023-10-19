import React from 'react';
import { Navigate, } from 'react-router-dom';
import { useAuth } from '../authContext/AuthContext';
import Home from '../pages/Home';
import UpdateForm from '../components/UpdateForm';



export function PrivateRoute({ element, path}) {
  const { isAuthenticated } = useAuth();
    return isAuthenticated ? (
      <Home/> 
    ) : (
      <Navigate to="/login" />
    );
  }

  export function ProtectRoute({ element, path}) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? (
       <UpdateForm/>
    ) : (
      <Navigate to="/login" />
    );
  }