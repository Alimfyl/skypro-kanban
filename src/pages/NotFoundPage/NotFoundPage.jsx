import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #EAEEF6;
  font-family: "Roboto", sans-serif;
`;

function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <h1>404</h1>
      <p>Упс... Кажется, такой страницы не существует.</p>
      <Link to="/" style={{ color: "#565EEF", marginTop: "20px" }}>
        Вернуться на главную
      </Link>
    </NotFoundWrapper>
  );
}

export default NotFoundPage;