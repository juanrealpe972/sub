import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SubastaContextProviter } from "./context/SubastaContext";

import Layout from "./components/Layout";

import SubastaPage from "./pages/SubastaPage";
import SubastaForm from "./pages/SubastaForm";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import ProfileUser from "./pages/ProfileUser";

function App() {
  return (
    <AuthProvider>
      <SubastaContextProviter>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<LoginUser />} />
              <Route path="/register" element={<RegisterUser />} />
              <Route path="/profile" element={<ProfileUser />} />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/subcoffee" element={<SubastaPage />} />
                <Route path="/subform" element={<SubastaForm />} />
                <Route path="/editmess/:id" element={<SubastaForm />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </SubastaContextProviter>
    </AuthProvider>
  );
}

export default App;
