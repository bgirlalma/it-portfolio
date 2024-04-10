import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media screen and (min-width: 568px) {
    max-width: 568px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const WrappMenuContainer = styled.div`
  
`;

export const ButtonMenu = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  margin-right: 20px;

  @media screen and (min-width: 568px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #f8f8f8;
  z-index: 1000;
  padding: 20px;
  transition: right 1s ease;

  @media screen and (min-width: 450px) {
    width: 50%;
  }

  @media screen and (min-width: 568px) {
    width: 50%;
    padding: 40px;
  }

  @media screen and (min-width: 767px) {
  }
`;

export const CloseButton = styled.button`
  display: flex;
  margin-left: auto;
  border: none;
  background-color: inherit;
  padding: 0;
`;

export const MenuNav = styled.div`
margin-top: 40px;
`;

export const TabletContainer = styled.div`
  display: none;

  @media screen and (min-width: 568px) {
    display: flex;
  }
`;
