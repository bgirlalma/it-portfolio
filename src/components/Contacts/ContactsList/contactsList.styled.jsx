import styled from "styled-components";

export const ContactsListContainer = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 568px) {
    width: 528px;
    padding: 0;
    margin-top: 30px;
  }

  @media screen and (min-width: 1200px) {
  flex-direction: unset;
  }
`;

export const ImageContainer = styled.div`

`;

export const ContactsItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 15%,
    rgba(167, 33, 33, 1) 50%,
    rgba(0, 0, 0, 1) 89%
  );
  border-radius: 10px;

  a {
    font-family: var(--main-font-family);
    font-weight: 500;
    font-size: 28px;
    color: var(--white-color);
  }

  @media screen and (min-width: 1200px){
  width: 400px;
  }
`;