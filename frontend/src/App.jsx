import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import SubastaPage from "./pages/SubastaPage";
import Dashboard from "./pages/Dashboard";
import ProfileUser from "./pages/ProfileUser";
import ComoCrearUnaSubasta from "./pages/ComoCrearUnaSubasta";
import ComoPujarUnaSubasta from "./pages/ComoPujarUnaSubasta";
import Configuration from "./pages/Configuration";
import Ayuda from "./pages/Ayuda";
import Inicio from "./pages/Inicio";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Inicio />} />
            <Route path="comopujar" element={<ComoCrearUnaSubasta />} />
            <Route path="comosubastar" element={<ComoPujarUnaSubasta />} />
            <Route path="profile" element={<ProfileUser />} />
            <Route path="ayudaCrear" element={<ComoCrearUnaSubasta />} />
            <Route path="ayudacomopujar" element={<ComoPujarUnaSubasta />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="ayuda" element={<Ayuda />} />
          </Route>

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="subcoffee" element={<SubastaPage />} />
            <Route path="profile" element={<ProfileUser />} />
            <Route path="ayudaCrear" element={<ComoCrearUnaSubasta />} />
            <Route path="ayudacomopujar" element={<ComoPujarUnaSubasta />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="ayuda" element={<Ayuda />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
