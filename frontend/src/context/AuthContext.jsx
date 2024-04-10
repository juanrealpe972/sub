import { createContext, useEffect, useState } from "react";
import axios from "axios"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState(null);
  const URL = "http://localhost:9722/v1/users";
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
        setIsAuthenticated(true)
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario:", error);
        // alert("Error al obtener los datos del usuario");
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, users }} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext