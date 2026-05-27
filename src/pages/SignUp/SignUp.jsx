import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";

export const SignUpPage = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const userData = await register(formData);
      
      localStorage.setItem("token", userData.token);
      
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" onSubmit={handleRegister}>
              <input
                className="modal__input first-name"
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleInputChange}
                required
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              
              {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

              <button 
                className="modal__btn-signup-ent _hover01" 
                disabled={isLoading}
              >
                {isLoading ? "Регистрация..." : "Зарегистрироваться"}
              </button>
              
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт? <Link to="/signin">Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
