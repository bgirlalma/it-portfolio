import Button from "./Button/button";
import ProjectItems from "./ProjectItems/items";
import { Title } from './Projects.styled';

const Projects = () => {
    return (
      <div>
        <Button/>
      
          <Title>Team Projects</Title>
          
                <ProjectItems/>
      
      </div>
    );
}

export default Projects;