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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true)
  };


  useEffect(() => {
    try {
    } catch (error) {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext