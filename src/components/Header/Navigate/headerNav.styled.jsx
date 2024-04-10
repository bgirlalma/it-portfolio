import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 568px) {
    display: flex;
  }
`;

const active = 'active';

export const ListNavLink = styled(NavLink).attrs(active)`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 28px;
  color: var(--black-color);

  &.${active} {
    color: var(--active-color);
  }

  @media screen and (min-width: 568px) {
    font-size: 18px;
    color: var(--white-color);
  }
`;