import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListContainer = styled.ul`
display: grid;
gap: 20px;
`;


export const ListNavLink = styled(NavLink)`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 28px;
  color: var(--black-color);
`;