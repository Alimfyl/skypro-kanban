import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { cardList } from "../../data";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="wrapper">
        
      <Outlet /> 

      <Header />

      {isLoading ? (
        <p style={{ textAlign: "center", marginTop: "50px" }}>Данные загружаются...</p>
      ) : (
        <Main cards={cardList} />
      )}
    </div>
  );
}

export default MainPage;
