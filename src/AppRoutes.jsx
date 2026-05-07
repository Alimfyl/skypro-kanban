import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PopUser from "./components/PopUser/PopUser";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

 function AppRoutes({ user, setUser }) {
  return (
    <Routes>
        
      <Route element={<PrivateRoute isAuth={!!user} />}>
        <Route path="/" element={<MainPage user={user} />}>
        
          <Route path="exit" element={<PopUser setUser={setUser} />} />
          <Route path="new-card" element={<PopNewCard />} />
          <Route path="card/:id" element={<PopBrowse />} />
        </Route>
      </Route>


      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
