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
      'oco oco oco . .'
      '. . oct oct oct'
      ' owt owt owt . .'
      '. . owf owf owf'
      'fiv fiv fiv . .';
  }

  @media screen and (min-width: 1800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: unset;
    gap: 20px;
  }
`;

//Card one start
export const OwmCardOne = styled.li`
  width: 100%;
  height: auto;

  border-radius: 20px;
  padding: 20px 10px;
  background-color: var(--backgroung-cards-color);
  margin-bottom: 20px;

  box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -webkit-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -moz-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);

  animation: ${AnimationCardLeft} 0.9s ease-in-out forwards;

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: oco;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;

    box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -webkit-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -moz-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
  }

  @media screen and (min-width: 1100px) {
    grid-area: oco;
  }

  @media screen and (min-width: 1800px) {
    width: auto;
    max-width: unset;
    grid-area: unset;
    margin: 0;

    animation: ${AnimationCardTop} 0.9s ease-in-out forwards;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  border-radius: 10px;
`;

export const ButtonLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;

  @media screen and (min-width: 568px) {
    margin-bottom: 0;
  }
`;

export const ButtonLinkCodeOne = styled.a`
  width: 70px;
  height: 40px;

   display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);
  cursor: pointer;

  transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-blue);
  }
`;

export const ButtonLinkWebsiteOne = styled.a`
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
  cursor: pointer;

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
//card one end

//card two start
export const OwnCardTwo = styled.li`
  width: 100%;
  height: auto;

  border-radius: 20px;
  padding: 20px 10px;
  background-color: var(--backgroung-cards-color);
  margin-bottom: 20px;

  box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -webkit-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -moz-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);

  animation: ${AnimationCardRight} 0.9s ease-in-out forwards;

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: oct;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;

    box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -webkit-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -moz-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
  }

  @media screen and (min-width: 1100px) {
    grid-area: oct;
  }

  @media screen and (min-width: 1800px) {
    width: auto;
    max-width: unset;
    grid-area: unset;
    margin: 0;
  }
`;

export const ButtonLinkCodeTwo = styled.a`
  width: 70px;
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
  cursor: pointer;

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

export const ButtonLinkWebsiteTwo = styled.a`
  width: 80px;
  height: 40px;

   display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-turquoise-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);
  cursor: pointer;

   transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-turqoise);
  }
`;
//card two end

//card three start
export const OwnCardThree = styled.li`
  width: 100%;
  height: auto;

  border-radius: 20px;
  padding: 20px 10px;
  background-color: var(--backgroung-cards-color);
  margin-bottom: 20px;

  box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -webkit-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -moz-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);

  animation: ${AnimationCardLeft} 0.9s ease-in-out forwards;

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: owt;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;

    box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -webkit-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -moz-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
  }

  @media screen and (min-width: 1100px) {
    grid-area: owt;
  }

  @media screen and (min-width: 1800px) {
    width: auto;
    max-width: unset;
    grid-area: unset;
    margin: 0;
  }
`;

export const ButtonLinkCodeThree = styled.a`
  width: 70px;
  height: 40px;

   display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-turquoise-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);
  cursor: pointer;

   transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-turqoise);
  }
`;

export const ButtonLinkWebsiteThree = styled.a`
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
  cursor: pointer;

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
//card three end

//card four start
export const OwnCardFour = styled.li`
  width: 100%;
  height: auto;

  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px 10px;
  background-color: var(--backgroung-cards-color);

  box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -webkit-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -moz-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);

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
    grid-area: owf;
  }

  @media screen and (min-width: 1800px) {
    width: auto;
    max-width: unset;
    grid-area: unset;
    margin: 0;

    animation: ${AnimationCardBottom} 0.9s ease-in-out forwards;
  }
`;

export const ButtonLinkCodeFour = styled.a`
  width: 70px;
  height: 40px;

   display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--white-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--link-dark);
  cursor: pointer;

  transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-white);
  }
`;

export const ButtonLinkWebsiteFour = styled.a`
  width: 80px;
  height: 40px;

   display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-grey-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);
  cursor: pointer;

  transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-grey-color);
  }
`;
//card four end

//card five start
export const OwnCardFive = styled.li`
  width: 100%;
  height: auto;

  border-radius: 20px;
  padding: 20px 10px;
  background-color: var(--backgroung-cards-color);
  margin-bottom: 20px;

  box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -webkit-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);
  -moz-box-shadow: 0px 0px 5px 9px rgba(0, 249, 255, 0.75);

  animation: ${AnimationCardLeft} 0.9s ease-in-out forwards;

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: oco;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;

    box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -webkit-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
    -moz-box-shadow: -5px -1px 11px 6px rgba(0, 249, 255, 1);
  }

  @media screen and (min-width: 1100px) {
    grid-area: fiv;
  }

  @media screen and (min-width: 1800px) {
    width: auto;
    max-width: unset;
    grid-area: unset;
    margin: 0;

    animation: ${AnimationCardTop} 0.9s ease-in-out forwards;
  }
`;

export const ButtonLinkCodeFive = styled.button`
  width: 70px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px 0;
  border: none;
  padding: 0;
  background: linear-gradient(
    24deg,
    rgba(80, 164, 54, 0.5) 34%,
    rgba(101, 189, 242, 0.5) 81%
  );

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);
  cursor: pointer;

  transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background: var(--hover-grey-color);
  }
`;

export const ButtonLinkWebsiteFive = styled.button`
  width: 80px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);
  cursor: pointer;

  transition:
    background-color 0.5s,
    color 0.3s;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-blue);
  }
`;

export const OwnDesc = styled.p`
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
