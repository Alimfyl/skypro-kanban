import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { TaskProvider } from "./contexts/TaskContext";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./GlobalStyle";
import './App.css';

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
