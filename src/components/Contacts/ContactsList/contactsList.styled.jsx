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
    width: unset;
    display: grid;
    justify-content: center;
    width: 1200px;
    grid-template-columns: 1fr 1fr;
    flex-direction: unset;
    margin-left: auto;
    margin-right: auto;
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
    rgba(75, 52, 52, 1) 3%,
    rgba(167, 33, 33, 1) 50%,
    rgba(68, 5, 5, 1) 100%
  );
  border-radius: 10px;

  a {
    font-family: var(--main-font-family);
    font-weight: 500;
    font-size: 28px;
    color: var(--white-color);
    transition: color 0.5s;
  }

  a:hover {
    color: var(--hover-link-blue);
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 120px;
  }
`;