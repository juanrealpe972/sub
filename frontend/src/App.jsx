import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import SubastaPage from "./pages/SubastaPage";
import Dashboard from "./pages/Dashboard";
import ProfileUser from "./pages/ProfileUser";
import ComoCrearUnaSubasta from "./pages/ComoCrearUnaSubasta";
import ComoPujarUnaSubasta from "./pages/ComoPujarUnaSubasta";
import Configuration from "./pages/Configuration";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import AyudaPage from "./pages/AyudaPage";
import DashboardContentOrganims from "./components/organisms/DashboardContentOrganims";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="subcoffee" element={<SubastaPage />} />
            <Route path="profile" element={<ProfileUser />} />
            <Route path="ayudaCrear" element={<ComoCrearUnaSubasta />} />
            <Route path="ayudacomopujar" element={<ComoPujarUnaSubasta />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="ayuda" element={<AyudaPage />} />
          </Route>

          <Route path="/" element={<Dashboard />}>
            <Route index element={<DashboardContentOrganims />} />
            <Route path="comopujar" element={<ComoCrearUnaSubasta />} />
            <Route path="comosubastar" element={<ComoPujarUnaSubasta />} />
            <Route path="ayudaCrear" element={<ComoCrearUnaSubasta />} />
            <Route path="ayudacomopujar" element={<ComoPujarUnaSubasta />} />
            <Route path="ayuda" element={<AyudaPage />} />
          </Route>


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
