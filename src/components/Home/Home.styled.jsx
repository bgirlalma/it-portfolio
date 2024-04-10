import styled from 'styled-components';
import MyPhoto from './Photo/my-photo.jpg';
import MyPhotoDesktop from './Photo/backdrop.jpg'

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${MyPhotoDesktop});
  background-size: cover;

  @media screen and (min-width: 568px) {
    background-image: url(${MyPhoto});
    width: 570px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
  }

  @media screen and (min-width: 600px) {
    width: 600px;
    height: 300px;
  }

  @media screen and (min-width: 700px) {
    width: 690px;
    height: 350px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 400px;
  }
`;

export const Content = styled.div`

`;

export const HomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding: 80px 40px 0 40px;

  font-family: var(--main-font-family);
  font-weight: 600;
  font-size: 28px;
  color: var(--white-color);

  @media screen and (min-width: 568px) {
    display: flex;
    justify-content: unset;
    padding: 40px 0 0 40px;
    max-width: 380px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: unset;
    max-width: 380px;
    padding: 100px 0 0 100px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 38px;
    justify-content: inherit;
  }
`;

export const HomeDesc = styled.p`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--white-color);
  margin: 40px 0 0 0;
  padding: 0 40px 20px 40px;

  @media screen and (min-width: 470px) {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 568px) {
    max-width: 380px;
    margin: 20px 0 0 0;
    padding: 0 0 20px 40px;
    margin-left: unset;
    margin-right: unset;
  }

  @media screen and (min-width: 768px) {
    display: inline-block;
    justify-content: unset;
    max-width: 500px;
    padding: 0;
    padding-left: 100px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 30px;
  }
`;

export const LinkSpan = styled.span`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--link-color);
  background-color: var(--white-color);
  padding: 2px;
  border-radius: 10px 5px 10px 5px;
`;
