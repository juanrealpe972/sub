import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === true) return <h1>Cargando...</h1>;
    if (!isAuthenticated) navigate("/login", { replace: true });
  }, [isAuthenticated, navigate]);
  if (isAuthenticated) return <Outlet />;
}

export default ProtectedRoute;
