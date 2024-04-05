import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const WrappMenuContainer = styled.div``;

export const ButtonMenu = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
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
`;
