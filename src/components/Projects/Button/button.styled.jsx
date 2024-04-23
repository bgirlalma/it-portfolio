import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const active = 'active';

export const ButtonTeam = styled(NavLink)`
  position: relative;
  width: 100px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px 0 0 10px;
  border: none;
  cursor: pointer;

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--link-dark);
  background-color: var(--white-color);

  transition:
    background-color 0.5s,
    color 0.3s;

  &.${active} {
    background-color: var(--active-color);
    color: var(--white-color);
  }

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #333;
    top: 0;
    right: 0;
    bottom: 0;
  }

  &:hover {
    background-color: var(--active-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 1000px) {
    height: 50px;
  }
`;

export const ButtonOwn = styled(NavLink)`
  width: 100px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 10px 10px 0;
  border: none;
  cursor: pointer;

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--link-dark);
  background-color: var(--white-color);

  transition:
    background-color 0.5s,
    color 0.3s;

  &.${active} {
    background-color: var(--active-color);
    color: var(--white-color);
  }

  &:hover {
    background-color: var(--active-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 1000px) {
    height: 50px;
  }
`;
