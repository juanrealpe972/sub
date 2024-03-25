import { useAuth } from "./context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (loading === true) return <h1>Cargando...</h1>;
  if (!loading && !isAuthenticated) navigate("/login", { replace: true });
  return <Outlet />;
}

export default ProtectedRoute;
