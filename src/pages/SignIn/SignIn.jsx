import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

export const SignIn = ({ setUser }) => {
 
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
