import styled from 'styled-components';

export const CardProject = styled.li`
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
    max-width: 768px;
  }
`;

//CARD ONE START

export const ImageContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 30px;
`;

export const Image = styled.img`
border-radius: 10px;
`;

export const LinkCodeCardOne = styled.a`
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
`;

export const LinkWebsiteCardOne = styled.a`
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
`;
//CARD ONE END


//CARD TWO START
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

//CARD TWO END

//CARD THREE START

//CARD THREE END
