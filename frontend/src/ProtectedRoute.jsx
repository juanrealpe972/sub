import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import HeaderOrganism from "./components/organisms/HeaderOrganism";
import FooterOrganism from "./components/organisms/FooterOrganism";
import SidebarOrganims from "./components/organisms/SidebarOrganims";

function ProtectedRoute() {
  const auth = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setLoading(false);
    }
  }, [auth, navigate]);

  return (
    <>
      {loading ? (
        <div>
          <h1>Cargando...</h1>
        </div>
      ) : (
        <div className="flex flex-auto h-auto">
          <SidebarOrganims />
          <div className="grow">
            <HeaderOrganism />
            <Outlet />
            <FooterOrganism />
          </div>
        </div>
      )}
    </>
  );
}

export default ProtectedRoute;
