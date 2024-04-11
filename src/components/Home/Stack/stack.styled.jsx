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
  padding: 10px;
`;

export const CardTitle = styled.h3`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;

  a {
    color: var(--white-color);
  }
`;
