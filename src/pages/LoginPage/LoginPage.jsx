import { Link, useNavigate } from "react-router-dom";
// Импортируй свои Styled Components для страницы логина здесь
// import * as S from "./Login.styled"; 

function LoginPage({ setUser }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Чтобы форма не перезагружала страницу
    
    // Имитируем вход: записываем данные в состояние
    setUser({ name: "Ivan Ivanov", email: "ivan.ivanov@gmail.com" });
    
    // После входа перенаправляем на главную страницу
    navigate("/");
  };

  return (
    <div className="container-signin">
      <div className="modal">
        <div className="modal__block">
          <div className="modal__ttl">
            <h2>Вход</h2>
          </div>
          <form className="modal__form" action="#">
            <input type="text" placeholder="Эл. почта" />
            <input type="password" placeholder="Пароль" />
            
            {/* Кнопка входа */}
            <button className="modal__btn-enter" onClick={handleLogin}>
               Войти
            </button>
            
            <div className="modal__form-group">
              <p>Нужно зарегистрироваться?</p>
              {/* Используем Link вместо <a> для мгновенного перехода */}
              <Link to="/register">Регистрация здесь</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
