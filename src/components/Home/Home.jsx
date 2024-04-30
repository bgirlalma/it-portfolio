
import { lazy } from 'react';
import {
  Container,
  Content,
  HomeTitle,
  HomeDesc,
  LinkSpan,
} from './Home.styled';

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
          
            <LinkSpan to="/projects">Projects</LinkSpan>
           
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
