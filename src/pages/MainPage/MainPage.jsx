import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "../../api/tasks";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

function MainPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshTasks = () => {
    fetchTasks ()
    .then((data) => {
      setCards(data);
    })
    .catch((err) => {
      setError(err.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  useEffect (() =>{
  refreshTasks();
}, [] );
  return (
    <div className="wrapper">
        
      <Outlet context={{ cards, refreshTasks }} /> 

      <Header />

      {error && (
        <p style={{color:"red", textAlign: "center", marginTop: "20px"}}>
          {error}
        </p>
      )}

      {isLoading ? (
        <p style={{ textAlign: "center", marginTop: "50px" }}>Данные загружаются...</p>
      ) : (
        <Main cards={cards} />
      )}
    </div>
  );
}

export default MainPage;
