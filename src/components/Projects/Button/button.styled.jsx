import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

// const active = 'active';

export const ButtonTeam = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  border-radius: 10px 0 0 10px;
  border: none;
  cursor: pointer;

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: ${(props) =>
    props.active === 'true' ? 'var(--white-color)' : 'var(--link-dark)'};
  background-color: ${(props) =>
    props.active === 'true' ? 'var(--active-color)' : 'var(--white-color)'};

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

export const ButtonOwn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 0 10px 10px 0;
  border: none;
  cursor: pointer;

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: ${(props) =>
    props.active === 'true' ? 'var(--white-color)' : 'var(--link-dark)'};
  background-color: ${(props) =>
    props.active === 'true' ? 'var(--active-color)' : 'var(--white-color)'};

  &:hover {
    background-color: var(--active-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 1000px) {
    height: 50px;
  }
`;
