import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return (
      <div className="flex flex-auto h-auto">
        <Sidebar />
        <div className="grow">
          <Header />
          <Outlet />
        </div>
      </div>
    );
  } else {
    navigate("/")
    return <h1>Redireccionando a la página de inicio de sesión...</h1>;
  }
}

export default ProtectedRoute;
