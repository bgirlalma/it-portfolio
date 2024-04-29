import styled from 'styled-components';

export const CardContainer = styled.ul`
  max-width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;

   @media screen and (min-width: 568px) {
    max-width: unset;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1000px) {
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 100px;

  border: 1px solid #fff;
  border-radius: 20px;

  @media screen and (min-width: 1000px) {
    width: 100%;
  }
`;

export const CardTitle = styled.h3`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;

  a {
    transition: color 0.5s;
    color: var(--white-color);
  }

  a:hover {
    color: var(--hover-link-blue);
  }
`;
