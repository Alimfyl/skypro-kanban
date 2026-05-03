import { Link, useNavigate } from "react-router-dom";
import * as S from "../LoginPage/Login.styled"; // Переиспользуем твои стили

function RegisterPage({ setUser }) {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Имитируем регистрацию и вход
    setUser({ name: "Новый пользователь" });
    // Переходим на главную
    navigate("/");
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
              name="first-name"
              id="first-name"
              placeholder="Имя"
            />
            <S.ModalInput
              type="text"
              name="login"
              id="loginReg"
              placeholder="Эл. почта"
            />
            <S.ModalInput
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            
            <S.ModalBtnEnter type="submit" id="SignUpEnter">
              Зарегистрироваться
            </S.ModalBtnEnter>

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
