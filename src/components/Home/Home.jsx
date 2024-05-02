
import { lazy } from 'react';
import {
  Container,
  Content,
  HomeTitle,
  HomeDesc,
  LinkSpan,
  ButtonCV
} from './Home.styled';
import { NavLink } from 'react-router-dom';

const Stack = lazy(() => import('./Stack/stack'));

const Home = () => {
  return (
    <>
      <Container>
        <Content>
          <HomeTitle>Fullstack developer</HomeTitle>
          <HomeDesc>
            Hi! I`m Alina Akulina, i`m involved in the developmant of websites
            and applications. I have 1.6 years of practical experience. I have
            experience working in a team and independently. Check out my
            <div>
              <LinkSpan>
                <NavLink to="/projects">Projects</NavLink>
              </LinkSpan>
              <ButtonCV>CV</ButtonCV>
            </div>
          </HomeDesc>
        </Content>
      </Container>

      <div>
        <Stack />
      </div>
    </>
  );
};

export default Home;
