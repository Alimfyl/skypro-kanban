import { Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PopUser from "./components/PopUser/PopUser";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function AppRoutes() {
  const { isAuthenticated, isInitializing } = useAuth();

  
  
  if (isInitializing) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#94A3B8' }}>
        Загрузка приложения...
      </div>
    );
  }

  return (
    <Routes>
      
      <Route element={<PrivateRoute isAuth={isAuthenticated} />}>
      
        <Route path="/" element={<MainPage />}>
          <Route path="exit" element={<PopUser />} />
          <Route path="new-card" element={<PopNewCard />} />
          <Route path="card/:id" element={<PopBrowse />} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
