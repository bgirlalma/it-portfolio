import { NavLink } from 'react-router-dom';
import {
  Container,
  Content,
  HomeTitle,
  HomeDesc,
  LinkSpan,
} from './Home.styled';
import Stack from './Stack/stack';

const Home = () => {
  return (
    <>
      <Container>
        <Content>
          <HomeTitle>Fullstack developer</HomeTitle>
          <HomeDesc>
            Hi! I`m Alina Akulina, i`m involved in the developmant of websites
            and applications. I have 1.6 years of practical experience. I have
            experience working in a team and independently. Check out my{' '}
            <LinkSpan>
              <NavLink to="/projects">Projects</NavLink>
            </LinkSpan>
          </HomeDesc>
        </Content>
      </Container>


      <div>
        <Stack/>
      </div>
    </>
  );
};

export default Home;
