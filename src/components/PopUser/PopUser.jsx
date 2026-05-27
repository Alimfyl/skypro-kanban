import { useNavigate } from "react-router-dom";

function PopUser({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    
	
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
	
    setUser(null);
    
	
    navigate("/login");
  };

  const handleStay = (e) => {
    e.preventDefault();
    navigate("/");  
  };

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit">
            <div className="pop-exit__form-group">
              <button 
                className="pop-exit__exit-yes _hover01" 
                id="exitYes" 
                onClick={handleLogout}
              >
                Да, выйти
              </button>
              <button 
                className="pop-exit__exit-no _hover03" 
                id="exitNo" 
                onClick={handleStay}
              >
                Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUser;
