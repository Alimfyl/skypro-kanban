import { Link, useNavigate } from "react-router-dom";
import * as S from "./Login.styled";

function LoginPage({ setUser }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: "Ivan Ivanov" });
    navigate("/");
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
              <S.ModalInput type="email" placeholder="Эл. почта" />
              <S.ModalInput type="password" placeholder="Пароль" />
              <S.ModalBtnEnter type="submit">Войти</S.ModalBtnEnter>
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
