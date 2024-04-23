import Projects from '../../components/Projects/Projects';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 15%,
    rgba(167, 33, 33, 1) 50%,
    rgba(0, 0, 0, 1) 89%
  );

  @media screen and (min-width: 420px) {
    padding: 20px;
  }
  @media screen and (min-width: 568px) {
    // max-width: 1440px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const ProjectsPage = () => {
  return (
    <Container>
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
