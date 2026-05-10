import './App.css'
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import  AppRoutes  from "./AppRoutes";
import { GlobalStyle } from "./GlobalStyle";



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
