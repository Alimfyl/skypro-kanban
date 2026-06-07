import { createContext, useContext, useState, useEffect } from "react";
import { login as loginApi, register as registerApi } from "../api/auth";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
    setIsInitializing(false);
  }, []);

  const login = async (loginName, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const userData = await loginApi({ login: loginName, password });
      
      
      localStorage.setItem("token", userData.token || "mock-token");
      localStorage.setItem("user", JSON.stringify(userData));
      
      setUser(userData);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (loginName, password, name) => {
    setIsLoading(true);
    setError(null);
    try {
      const userData = await registerApi({ login: loginName, name, password });
      
      localStorage.setItem("token", userData.token || "mock-token");
      localStorage.setItem("user", JSON.stringify(userData));
      
      setUser(userData);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, isInitializing, error, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
