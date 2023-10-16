// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState()

  const login = (newToken) => {
    setToken(newToken);
  };


  const logout = () => {
    setToken(null);
  };

  const userAuthId=(id)=>{  
      setUserId(id);
  }

  return (
    <AuthContext.Provider value={{ token, login, logout,userAuthId, userId }}>
      {children}
    </AuthContext.Provider>
  );
};
