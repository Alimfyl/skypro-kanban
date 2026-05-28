import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { TaskProvider } from "./contexts/TaskContext";
import { useAuth } from "./contexts/AuthContext";
import { GlobalStyle } from "./GlobalStyle";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Компонент для защиты приватных маршрутов
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Публичные маршруты */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Приватные маршруты (только для авторизованных) */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/card/:id"
        element={
          <ProtectedRoute>
            <PopBrowse />
          </ProtectedRoute>
        }
      />
      
      {/* 404 страница */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>      
        <TaskProvider>      
          <GlobalStyle />
          <AppRoutes />     
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;