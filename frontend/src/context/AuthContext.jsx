import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../api/axios";

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
  // const [usuario, setUsuario] = useState({})

  // useEffect(() => {
  //   axiosClient.get("/v1/users").then((response) => {
  //     setUsuario(response.data.usuario)
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext