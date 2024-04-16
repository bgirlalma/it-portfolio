import Button from "./Button/button";
import ProjectItems from "./TeamProjects/teamItems";
import { Title } from './Projects.styled';
import OwmItems from "./OwmProjects/owmItems";

const Projects = () => {
    return (
      <div>
        <Title>Team Projects</Title>
        <Button />
        <ProjectItems />
        <OwmItems/>
      </div>
    );
}

export default Projects;