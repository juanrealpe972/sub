import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SubastaContextProviter } from "./context/SubastaContext";

import Layout from "./components/Layout";

import SubastaPage from "./pages/SubastaPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import ProfileUser from "./pages/ProfileUser";
import ComoCrearUnaSubasta from "./pages/ComoCrearUnaSubasta";
import ComoPujarUnaSubasta from "./pages/ComoPujarUnaSubasta";
import Configuration from "./pages/Configuration";
import Ayuda from "./pages/Ayuda";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/comopujar" element={<ComoCrearUnaSubasta />} />
              <Route path="/comosubastar" element={<ComoPujarUnaSubasta />} />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/subcoffee" element={<SubastaPage />} />
                <Route path="/profile" element={<ProfileUser />} />
                <Route path="/ayudacrearsubasta" element={<ComoCrearUnaSubasta />} />
                <Route path="/ayudacomopujar" element={<ComoPujarUnaSubasta />} />
                <Route path="/configuration" element={<Configuration />} />
                <Route path="/ayuda" element={<Ayuda />} />
                <Route path="/LoginPage" element={<LoginPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
