import styled from 'styled-components';

export const ListContainer = styled.ul`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      'o o o . . '
      ' . . t t t'
      'th th th . . ';
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

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: o;
    max-width: 768px;
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
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;

  border-radius: 15px 0;
  padding: 5px;

  background-color: var(--link-dark);
  color: var(--white-color);

  &:hover {
    background-color: var(--hover-link-dark);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 8px;
  }
`;

export const LinkWebsiteCardOne = styled.a`
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;

  border-radius: 15px 0;
  padding: 5px;

  background-color: var(--link-orange);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 8px;
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

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: t;
    max-width: 768px;
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
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;

  border-radius: 15px 0;
  padding: 5px;

  background-color: var(--link-green-color);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 8px;
  }

  &:hover {
    background-color: var(--hover-link-green);
  }
`;

export const LinkWebsiteCardTwo = styled.a`
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;

  border-radius: 15px 0;
  padding: 5px;

  background-color: var(--link-black-color);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 8px;
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

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 568px) {
    display: flex;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-area: th;
    max-width: 768px;
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
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;

  border-radius: 15px 0;
  padding: 5px;
  background-color: var(--link-pink-color);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 8px;
  }

  &:hover {
    background-color: var(--hover-link-pink);
  }
`;

export const LinkWebsite = styled.a`
  font-family: var(--main-font-family);
  font-weight: 400;
  font-size: 18px;

  border-radius: 15px 0;
  padding: 5px;

  background-color: var(--link-lite-green-color);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 8px;
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


