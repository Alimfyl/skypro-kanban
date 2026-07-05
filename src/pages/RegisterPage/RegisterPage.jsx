import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import * as S from "../LoginPage/Login.styled"; 

function RegisterPage() {
  const navigate = useNavigate();
  
  const { register, isLoading, error } = useAuth();

  
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
  e.preventDefault();
  if (!formData.name.trim() ||
    !formData.login.trim() ||
    !formData.password.trim()) {
  return alert("Заполните все поля");
}
  const success = await register(
  formData.login.trim(),
  formData.password.trim(),
  formData.name.trim()
);
  if (success) navigate("/");
};

  return (
    <S.Wrapper>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtl>
            <h2>Регистрация</h2>
          </S.ModalTtl>
          <S.ModalFormLogin onSubmit={handleRegister}>
            <S.ModalInput
              type="text"
              name="name" 
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <S.ModalInput
              type="text"
              name="login" 
              placeholder="Логин или эл. почта"
              value={formData.login}
              onChange={handleChange}
              required
            />
            <S.ModalInput
              type="password"
              name="password" 
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              required
            />
            
            <S.ModalBtnEnter type="submit" id="SignUpEnter" disabled={isLoading}>
              {isLoading ? "Регистрация..." : "Зарегистрироваться"}
            </S.ModalBtnEnter>

            {error && <p style={{ color: "red", marginTop: "8px", textAlign: "center" }}>{error}</p>}

            <S.ModalFormGroup>
              <p>
                Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
              </p>
            </S.ModalFormGroup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Modal>
    </S.Wrapper>
  );
}

export default RegisterPage;
