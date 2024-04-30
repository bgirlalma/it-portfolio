import styled from 'styled-components';


export const LogoContainer = styled.div`
`;

export const LogoTitle = styled.h1`
  a {
    font-family: var(--logo-font-family);
    font-weight: 500;
    font-size: 48px;
    color: var(--active-color);
    transition: color 0.5s;
  }

  a:hover {
    color: var(--hover-link-blue);
  }
`;
