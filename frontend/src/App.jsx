import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./context/AuthContext";
import { DeparProvider } from "./context/DeparContext";

import SubastaPage from "./pages/SubastaPage";
import Dashboard from "./pages/Dashboard";
import ProfileUser from "./pages/ProfileUser";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import AyudaPage from "./pages/AyudaPage";
import DashboardContentOrganims from "./components/organisms/DashboardContentOrganims";
import GeografiaFullPage from "./pages/GeografiaFullPage";
import MiSubastaT from "./pages/MiSubastaT";
import TipoVariedadT from "./pages/TipoVariedadT";
import QuienesSomosA from "./pages/QuienesSomosA";
import PoliticasYCondicionesPageA from "./pages/PoliticasYCondicionesPageA";
import SubastaUser from "./pages/SubastaUser";
import UsersTable from "./components/Guard/UsersTable";

function App() {
  const users = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <NextUIProvider>
        <Toaster />
        <AuthProvider>
          <DeparProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Dashboard />}>
                  <Route element={<ProtectedRoute />}>
                    <Route path="/subcoffee" element={<SubastaPage />} />
                    <Route path="/profile/:id" element={<ProfileUser />} />
                    <Route path="/subasta/:id" element={<SubastaUser />} />
                    {users && users.rol_user === "admin" && (
                      <>
                        <Route path="/users" element={<UsersTable />} />
                        <Route path="/geografia" element={<GeografiaFullPage />} />
                        <Route path="/tipo_variedad" element={<TipoVariedadT />} />
                      </>
                    )}
                    {users && users.rol_user !== "comprador" && (
                      <>
                        <Route path="/mi_subasta" element={<MiSubastaT />} />
                      </>
                    )}
                  </Route>
                </Route>
                <Route element={<Dashboard />}>
                  <Route index element={<DashboardContentOrganims />} />
                  <Route path="/privacy-policy" element={<PoliticasYCondicionesPageA />} />
                  <Route path="/somos" element={<QuienesSomosA />} />
                  <Route path="/ayuda" element={<AyudaPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </DeparProvider>
        </AuthProvider>
      </NextUIProvider>
    </>
  );
}

export default App;
