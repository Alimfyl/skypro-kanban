import styled from 'styled-components';

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
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #d4dbe5;
  border-top: 4px solid #565eef;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const EmptyTasks = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px;
  color: #94a6be;
  font-size: 18px;
`;

 