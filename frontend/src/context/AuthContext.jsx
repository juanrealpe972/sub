import { createContext, useEffect, useState } from "react";
import axiosClient from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axiosClient.get("/v1/users").then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
        setIsAuthenticated(true)
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario:", error);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, users, setUsers }} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext