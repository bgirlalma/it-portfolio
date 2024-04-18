import styled from 'styled-components';

export const ListContainer = styled.ul`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      'oco oco oco . .'
      '. . oct oct oct'
      ' owt owt owt . .'
      '. . owf owf owf';
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

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: oco;
    max-width: 768px;
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

export const ButtonLinkCodeOne = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-blue);
  }
`;

export const ButtonLinkWebsiteOne = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-black-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

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

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: oct;
    max-width: 768px;
  }
`;

export const ButtonLinkCodeTwo = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-lite-green-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-green);
  }
`;

export const ButtonLinkWebsiteTwo = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-turquoise-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

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

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: owt;
    max-width: 768px;
  }
`;

export const ButtonLinkCodeThree = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-turquoise-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-turqoise);
  }
`;

export const ButtonLinkWebsiteThree = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-orange);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

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
export const OwnCardFour = styled.div`
  width: 100%;
  height: auto;

  border-radius: 20px;
  padding: 20px 10px;
  background-color: var(--backgroung-cards-color);

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: owf;
    max-width: 768px;
  }
`;

export const ButtonLinkCodeFour = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--white-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--link-dark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-link-white);
  }
`;

export const ButtonLinkWebsiteFour = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 15px 0;
  border: none;
  padding: 0;
  background-color: var(--link-grey-color);

  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    height: 50px;
  }

  &:hover {
    background-color: var(--hover-grey-color);
  }
`;
//card four end

export const OwnDesc = styled.p`
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
