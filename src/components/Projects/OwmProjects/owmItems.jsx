import webstudio from '../Photo/hero-dek-2x.jpg';
import BookApp from '../Photo/book-app.png';
import Rio from '../Photo/rio.png'
import {
  ListContainer,
  OwmCardOne,
  ImageContainer,
  Image,
  ButtonLinkContainer,
  ButtonLinkCodeOne,
  ButtonLinkWebsiteOne,
  OwnCardTwo,
  ButtonLinkCodeTwo,
    ButtonLinkWebsiteTwo,
    OwnCardThree,
    ButtonLinkCodeThree,
  ButtonLinkWebsiteThree,
  OwnDesc,
} from './owmItems.styled';
const OwmItems = () => {
  return (
    <ListContainer>
      {/* card one start */}
      <OwmCardOne>
        <div>
          <ImageContainer>
            <Image src={webstudio} alt="webstudio" width="250" height="140" />
          </ImageContainer>

          <ButtonLinkContainer>
            <ButtonLinkCodeOne type="button">
              <a href="https://github.com/bgirlalma/goit-markup-hw-07">Code</a>
            </ButtonLinkCodeOne>
            <ButtonLinkWebsiteOne type="button">
              <a href="https://bgirlalma.github.io/goit-markup-hw-07/">
                Website
              </a>
            </ButtonLinkWebsiteOne>
          </ButtonLinkContainer>
        </div>

        <OwnDesc>
          Webstudio is the first project we did during the courses. This is a
          website about an IT company. The website has 3 pages, which were
          created with HTML, CSS and JS.
        </OwnDesc>
      </OwmCardOne>

      {/* card two start */}
      <OwnCardTwo>
        <OwnDesc>
          The Book Contacts App was developed with the React framework. If you
          want to use the application, you have to register or login. After
          registering or logging in, you have the opportunity to add new
          contacts, delete old contacts, or find the contact you need.
        </OwnDesc>

        <div>
          <ImageContainer>
            <Image src={BookApp} alt="book app" width="250" height="150" />
          </ImageContainer>

          <ButtonLinkContainer>
            <ButtonLinkCodeTwo type="button">
              <a href="https://github.com/bgirlalma/goit-react-hw-08-phonebook">
                Code
              </a>
            </ButtonLinkCodeTwo>
            <ButtonLinkWebsiteTwo type="button">
              <a href="https://bgirlalma.github.io/goit-react-hw-08-phonebook/">
                Website
              </a>
            </ButtonLinkWebsiteTwo>
          </ButtonLinkContainer>
        </div>
      </OwnCardTwo>

      {/* card three start */}
      <OwnCardThree>
        <div>
          <ImageContainer>
            <Image src={Rio} alt="Company RiO" width="250" height="150" />
          </ImageContainer>

          <ButtonLinkContainer>
            <ButtonLinkCodeThree type="button">
              <a href="https://github.com/bgirlalma/apartment-renovetion-website">
                Code
              </a>
            </ButtonLinkCodeThree>
            <ButtonLinkWebsiteThree type="button">
              <a href="https://bgirlalma.github.io/apartment-renovetion-website/">
                Website
              </a>
            </ButtonLinkWebsiteThree>
          </ButtonLinkContainer>
        </div>

        <OwnDesc>
          RiO is a builing company that specializes in apartment renovation,
          offices spaces, retair stores. This website was created for my
          brother`s company. He is currently using it. It utilizes HTML, JS,
          Node, LightBox2, MongoDB, Swiper.
        </OwnDesc>
      </OwnCardThree>

      <li>
        <OwnDesc></OwnDesc>
        <div>
          <ImageContainer>
            <Image src="" alt="" />
          </ImageContainer>

          <ButtonLinkContainer>
            <button type="button">
              <a href=""></a>
            </button>
            <button type="button">
              <a href=""></a>
            </button>
          </ButtonLinkContainer>
        </div>
      </li>
    </ListContainer>
  );
};

export default OwmItems;
