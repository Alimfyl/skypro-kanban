import './App.css'
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import  AppRoutes  from "./AppRoutes";
import { GlobalStyle } from "./GlobalStyle";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { TaskProvider } from "./contexts/TaskContext";
import { useAuth } from "./contexts/AuthContext";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PopBrowse from "./components/PopBrowse/PopBrowse";

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
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>      
        <TaskProvider>      
          <AppRoutes />     
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

function App() {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))); 

  return (
    <BrowserRouter>
      <GlobalStyle />
      
      <AppRoutes user={user} setUser={setUser} />
    </BrowserRouter>
  );
}

export default App;
