import { lazy } from 'react';
import {
  Container,
  Content,
  HomeTitle,
  HomeDesc,
  LinkSpan,
  LinkContainer,
  ButtonCV,
} from './Home.styled';
import { pdfjs } from 'react-pdf';

//configuring the file path pdf.worker.min.js. Use for proccessing file PDF client-side.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',

  //get current module
  import.meta.url
).toString();

const Stack = lazy(() => import('./Stack/stack'));

const Home = () => {
  function handleCVButtonClick() {
    const pdfurl =
      'https://firebasestorage.googleapis.com/v0/b/my-portfolio-4bd41.appspot.com/o/Alina%20Akulina%20Summary.pdf?alt=media&token=be6092bd-6206-4b2f-8db5-cdfdb04b0fa2';

    //open file in the new window
    window.open(pdfurl, '_blank');
  }
  return (
    <>
      <Container>
        <Content>
          <HomeTitle>Fullstack developer</HomeTitle>
          <HomeDesc>
            Hi! I`m Alina Akulina, i`m involved in the developmant of websites
            and applications. I have 1.6 years of practical experience. I have
            experience working in a team and independently. Check out my:
          </HomeDesc>

          <LinkContainer>
            <LinkSpan to="/projects">Projects</LinkSpan>

            <ButtonCV onClick={handleCVButtonClick}>CV</ButtonCV>
          </LinkContainer>
        </Content>
      </Container>

      <div>
        <Stack />
      </div>
    </>
  );
};

export default Home;
