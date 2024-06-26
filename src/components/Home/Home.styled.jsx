import styled from 'styled-components';
import MyPhoto from './Photo/my-photo.jpg';
import MyPhotoDesktop from './Photo/backdrop.jpg'
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${MyPhotoDesktop});
  background-size: cover;

  @media screen and (min-width: 568px) {
    background-image: url(${MyPhoto});
    width: calc(100% - 20px);
    height: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
  }

  @media screen and (min-width: 600px) {
    width: calc(100% - 20px);
    height: 320px;
  }

  @media screen and (min-width: 700px) {
    width: calc(100% - 20px);
    height: 350px;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 20px);
    height: 400px;
  }

  @media screen and (min-width: 1000px) {
    width: calc(100% - 20px);
    height: 500px;
  }

  @media screen and (min-width: 1200px) {
    width: calc(100% - 20px);
    height: 600px;
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    max-width: unset;
    width: 100%;
    height: 700px;
    margin-left: unset;
    margin-right: unset;
  }
`;

export const Content = styled.div`
  @media screen and (min-width: 1200px) {
    padding-top: 150px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%)
  }
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
    max-width: 650px;
    font-size: 38px;
    justify-content: inherit;
    padding: 100px 0 0 80px;
    @media screen and (min-width: 1200px) {
      padding-top: 0;
    }
  }
`;

export const HomeDesc = styled.p`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--white-color);
  margin: 40px 0 0 0;
  padding: 0 40px 0 40px;

  @media screen and (min-width: 470px) {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 568px) {
    max-width: 380px;
    margin: 20px 0 0 0;
    padding: 0 0 30px 40px;
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
    max-width: 700px;
    font-size: 30px;
    padding-left: 80px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 770px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 940px;
   
  }
`;

export const LinkContainer = styled.div`
  margin-top: 40px;
  padding: 0 40px;

  @media screen and (min-width: 470px) {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 568px) {
    max-width: 380px;
    padding-bottom: 40px;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    padding-left: 100px;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 40px;
    padding-left: 80px;
  }
`;

export const LinkSpan = styled(NavLink)`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 20px;
  background-color: var(--white-color);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.5s;
  color: var(--link-color);
  cursor: pointer;

  &:hover {
    color: var(--active-color);
    background-color: var(--hover-link-blue);
  }
`;

export const ButtonCV = styled.a`
  font-family: var(--main-font-family);
  font-weight: 500;
  font-size: 20px;
  color: var(--link-color);
  background-color: var(--white-color);
  padding: 10px 40px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    color: var(--active-color);
    background-color: var(--hover-link-blue);
  }
`;
