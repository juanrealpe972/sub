import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("usa Auth en AutProviter");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [loading, setLoading] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    try {
      
    } catch (error) {
      setIsAuthenticated(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ loading, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
