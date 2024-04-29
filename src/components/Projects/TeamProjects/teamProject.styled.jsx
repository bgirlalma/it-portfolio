
import styled, { keyframes } from 'styled-components';

const AnimationCardLeft = keyframes`
 from{
    transform: translateX(-100%);
    opacity: 0;
  }

  to{
    transform: translateX(0)
    opacity: 1;
`;

const AnimationCardRight = keyframes`
from{
  transform: translateX(100%);
  opacity: 0;
}
to{
  transform: translateX(0);
  opacity: 1;
}
`;

const AnimationCardTop = keyframes`
from{
  transform: translateY(-100%);
  opacity: 0;
}
to{
  transform: translateY(0);
  opacity: 1;
}

`;

const AnimationCardBottom = keyframes`
from{
  transform: translateY(100%);
  opacity: 0;
}
to{
  transform: translateY(0);
  opacity: 1;
}

`;

export const ListContainer = styled.ul`
  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      'o o o . . '
      ' . . t t t'
      'th th th . . ';
  }

  @media screen and (min-width: 1800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
    unset;
    gap: 20px;
  }
`;

//CARD One START
export const CardProjectOne = styled.li`
  width: 100%;
  height: auto;

  border-radius: 20px;
  padding: 20px 10px;
  background-color: var(--backgroung-cards-color);
  margin-bottom: 20px;

  box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -webkit-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -moz-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);

  &:last-child {
    margin-bottom: 0;
  }

  animation: ${AnimationCardLeft} 0.9s ease-in-out forwards;

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;

    box-shadow: 3px -1px 11px 6px rgba(0, 249, 255, 1);
    -webkit-box-shadow: 3px -1px 11px 6px rgba(0, 249, 255, 1);
    -moz-box-shadow: 3px -1px 11px 6px rgba(0, 249, 255, 1);
  }

  @media screen and (min-width: 1100px) {
    grid-area: o;
  }

  @media screen and (min-width: 1800px) {
    width: auto;
    max-width: unset;
    grid-area: unset;
    margin: 0;
    animation: ${AnimationCardTop} 0.9s ease-in-out forwards;
  }
`;

export const SimpleChocolateImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SimpleChocolateImage = styled.img`
  border-radius: 10px;
`;

export const LinkCodeCardOne = styled.a`
  width: 70px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-dark);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

    transition:
    background-color 0.5s,
    color 0.3s;

  &:hover {
    background-color: var(--hover-link-dark);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }
`;

export const LinkWebsiteCardOne = styled.a`
  width: 80px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-orange);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

    transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-orange);
  }
`;

//CARD One END

//CARD Two START
export const CardProjectTwo = styled.li`
  width: 100%;
  height: auto;

  border-radius: 20px;
  padding: 20px 10px;
  background-color: var(--backgroung-cards-color);
  margin-bottom: 20px;

  box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -webkit-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -moz-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);

  &:last-child {
    margin-bottom: 0;
  }

  animation: ${AnimationCardRight} 0.9s ease-in-out forwards;

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;

    box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -webkit-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -moz-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
  }

  @media screen and (min-width: 1100px) {
    grid-area: t;
  }

  @media screen and (min-width: 1800px) {
    width: auto;
    max-width: unset;
    grid-area: unset;
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 568px) {
    margin-top: 0;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
`;

export const LinkCodeCardTwo = styled.a`
  width: 70px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-green-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

    transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-green);
  }
`;

export const LinkWebsiteCardTwo = styled.a`
  width: 80px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-black-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

    transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--active-color);
  }
`;
//CARD Two END

//CARD Three START
export const CardProjectThree = styled.li`
  width: 100%;
  height: auto;

  border-radius: 20px;
  padding: 20px 10px;
  background-color: var(--backgroung-cards-color);
  margin-bottom: 20px;

  box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -webkit-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -moz-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);

  &:last-child {
    margin-bottom: 0;
  }

  animation: ${AnimationCardLeft} 0.9s ease-in-out forwards;

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;

    box-shadow: 3px -1px 11px 6px rgba(0, 249, 255, 1);
    -webkit-box-shadow: 3px -1px 11px 6px rgba(0, 249, 255, 1);
    -moz-box-shadow: 3px -1px 11px 6px rgba(0, 249, 255, 1);
  }

  @media screen and (min-width: 1100px) {
    grid-area: th;
  }

  @media screen and (min-width: 1800px) {
    width: auto;
    max-width: unset;
    grid-area: unset;
    margin: 0;
    animation: ${AnimationCardBottom} 0.9s ease-in-out forwards;
  }
`;
export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (min-width: 568px) {
    margin-bottom: 0;
  }
`;

export const LinkCode = styled.a`
  width: 70px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-pink-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

    transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-pink);
  }
`;

export const LinkWebsite = styled.a`
  width: 80px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-lite-green-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

    transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-green);
  }
`;

export const CardDesc = styled.p`
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

//CARD Three END