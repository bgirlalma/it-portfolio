import styled from 'styled-components';
import MyPhoto from './Photo/my-photo.jpg';
import MyPhotoDesktop from './Photo/backdrop.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${MyPhotoDesktop});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1000px) {
    background-image: url(${MyPhoto});
  }
`;

export const Content = styled.div`
padding: 20px;
`;

export const HomeTitle = styled.h1`
  font-family: var(--main-font-family);
  font-weight: 600;
  font-size: 28px;
  color: var(--white-color);
  margin-top: 80px;
`;

export const HomeDesc = styled.p`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--white-color);
  margin-top: 20px;
`;
