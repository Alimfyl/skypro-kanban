import styled from 'styled-components';


export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;


export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 10px;
`;


export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;


export const HeaderNav = styled.nav`
  position: relative;
  max-width: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const HeaderBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  font-weight: 500;
  margin-right: 20px;

  a {
    color: #FFFFFF;
  }

  &:hover {
    background-color: #33399b;
  }
  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;

  }
`;


export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #565EEF;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
  }
  &:hover {
    color: #33399b;
  }
  &:hover:after {
    border-left-color: #33399b;
  border-bottom-color: #33399b;
  }
`;
