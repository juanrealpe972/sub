import { useAuth } from "./context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // if (loading === true) return <h1>Cargando...</h1>;
  // if (!loading && !isAuthenticated) navigate("/login", { replace: true });
  if (isAuthenticated === true) {
    return <Outlet />;
  }
}

export default ProtectedRoute;
