import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
    border: none; /* Хорошая практика для сброса стилей кнопок */
    background: none;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
  }
   ._orange {
    background-color: #ffe4c2;
    color: #ff6d00;
  }
  ._green {
    background-color: #b5f2bbb0;
    color: #06b16e;
  }
  ._purple {
    background-color: #e9d4ff;
    color: #9a40f4;
  }
  .wrapper {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
}
`;

export default GlobalStyles;
