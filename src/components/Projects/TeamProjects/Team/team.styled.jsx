import styled from "styled-components";

export const ListContainer = styled.ul`
  padding: 30px 20px 20px 20px;

  @media screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 30px 0 0 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1100px) {
    max-width: 100%;
    grid-template-columns: repeat(4, 1fr);
    margin: 0;
  }

  @media screen and (min-width: 1325px) {
    margin-left: 34px;
    margin-right: 34px;
  }
`;

export const TeamList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(
    105deg,
    rgb(0 249 255 / 100%) 39%,
    rgb(51 56 57 / 100%) 96%
  );
  border-radius: 10px 10px 0 0;

  margin-bottom: 15px;
  padding: 5px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 568px) {
    height: 40px;
    margin-bottom: 0;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    height: 60px;
  }

  @media screen and (min-width: 1100px) {
    height: 80px;
  }
`;

export const DeveloperName = styled.h2`
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--black-color);
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    color: var(--active-color);
  }

  @media screen and (min-width: 568px) {
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 20px;
  }
`;

export const DeveloperLink = styled.a`
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--hover-link-blue);
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    color: var(--white-color);
  }

  @media screen and (min-width: 568px) {
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 20px;
  }
`;