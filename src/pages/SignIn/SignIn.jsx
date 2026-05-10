import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

export const SignIn = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const userData = await login(formData);
      
      
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData));

      
      navigate("/");
    } catch (err) {
      
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" onSubmit={handleLogin}>
              <input
                className="modal__input"
                type="text"
                name="login" 
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />


              {error && <p style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>{error}</p>}

              <button 
                className="modal__btn-enter _hover01" 
                id="btnEnter"
                disabled={isLoading}
              >
                {isLoading ? "Загрузка..." : "Войти"}
              </button>

              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                
                <Link to="/signup">Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
