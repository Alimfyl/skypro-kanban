import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api/auth";
import * as S from "./Login.styled";

function LoginPage({ setUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const userData = await login(formData); 
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData);
      navigate("/");
    } catch (err) {
      
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <S.Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.ModalFormLogin onSubmit={handleLogin}>
              <S.ModalInput
              type="text"
              name="login"
              placeholder="Логин"
              value={formData.login}
              onChange={handleChange}
              required />
              <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              required />
              <S.ModalBtnEnter type="submit" disabled={isLoading}>
                {isLoading? "Вход..." : "Войти"}
                </S.ModalBtnEnter>
                {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}
              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрация здесь</Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </S.Wrapper>
  );
}

export default LoginPage;
