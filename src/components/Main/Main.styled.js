import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #565EEF;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

export const EmptyTasks = styled.div`
  color: #94A3B8;
  text-align: center;
  padding: 40px 0;
  font-size: 16px;
`;

export const Main =  styled.main `
  width: 100%;
  flex-grow: 1;
  background-color: #EAEEF6;
  
`;
export const MainBlock =  styled.div `
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
  `;
  
export const MainContent =   styled.div `
  width: 100%;
  display: flex;
  @media screen and (max-width: 1200px) {
     display: block;
  }
`;