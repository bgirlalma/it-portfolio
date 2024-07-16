import webstudio from '../Photo/hero-dek-2x.jpg';
import BookApp from '../Photo/book-app.png';
import Rio from '../Photo/rio.png';
import LearnLingo from '../Photo/LearnLingo.png';
import Portfolio from '../Photo/portfolio-dance.jpg';
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
  OwnCardFour,
  ButtonLinkCodeFour,
  ButtonLinkWebsiteFour,
  OwnCardFive,
  // ButtonLinkCodeFive,
  // ButtonLinkWebsiteFive,
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
            <ButtonLinkCodeOne
              href="https://github.com/bgirlalma/goit-markup-hw-07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </ButtonLinkCodeOne>

            <ButtonLinkWebsiteOne
              href="https://bgirlalma.github.io/goit-markup-hw-07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </ButtonLinkWebsiteOne>
          </ButtonLinkContainer>
        </div>

        <OwnDesc>
          Webstudio is the first project we did during the courses. This is a
          website about an IT company. The website has 3 pages, which were
          created with HTML, CSS and JS.
        </OwnDesc>
      </OwmCardOne>
      {/* card one end */}

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
            <ButtonLinkCodeTwo
              href="https://github.com/bgirlalma/goit-react-hw-08-phonebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </ButtonLinkCodeTwo>

            <ButtonLinkWebsiteTwo
              href="https://bgirlalma.github.io/goit-react-hw-08-phonebook/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </ButtonLinkWebsiteTwo>
          </ButtonLinkContainer>
        </div>
      </OwnCardTwo>
      {/* card two end */}

      {/* card three start */}
      <OwnCardThree>
        <div>
          <ImageContainer>
            <Image src={Rio} alt="Company RiO" width="250" height="150" />
          </ImageContainer>

          <ButtonLinkContainer>
            <ButtonLinkCodeThree
              href="https://github.com/bgirlalma/apartment-renovetion-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </ButtonLinkCodeThree>

            <ButtonLinkWebsiteThree
              href="https://bgirlalma.github.io/apartment-renovetion-website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
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
      {/* card three end */}

      {/* card four start */}
      <OwnCardFour>
        <OwnDesc>
          Learn Lingo - application created for search a teachers for studing
          foreign. It utilizes React, Firebase, Vite, React-router-dom.
        </OwnDesc>
        <div>
          <ImageContainer>
            <Image
              src={LearnLingo}
              alt="Learn Lingo"
              width="250"
              height="120"
            />
          </ImageContainer>

          <ButtonLinkContainer>
            <ButtonLinkCodeFour
              href="https://github.com/bgirlalma/test-exercise-teacher-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </ButtonLinkCodeFour>

            <ButtonLinkWebsiteFour
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </ButtonLinkWebsiteFour>
          </ButtonLinkContainer>
        </div>
      </OwnCardFour>
      {/* card four end */}

      {/* card five start */}
      <OwnCardFive>
        <div>
          <ImageContainer>
            <Image
              src={Portfolio}
              alt="Dance Portfolio"
              width="250"
              height="140"
            />
          </ImageContainer>

          <ButtonLinkContainer>
           
          </ButtonLinkContainer>
        </div>
        <OwnDesc>
          Dance Portfolio. I created my dance portfolio to archive and showcase
          videos, photos, and the achievements of my students in various
          championships. This portfolio serves as a vital tool for communication
          with potential employers, demonstrating the progress and success of my
          teaching methods.
        </OwnDesc>
      </OwnCardFive>
    </ListContainer>
  );
};

export default OwmItems;
