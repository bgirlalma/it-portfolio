import Button from './Button/button';
import ProjectItems from './TeamProjects/teamItems';
import { Title } from './Projects.styled';
import OwmItems from './OwmProjects/owmItems';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [showOwnProjects, setShowOwnProjects] = useState(true);

  const navigate = useNavigate();


  const handleOpenOwnList = () => {
    setShowOwnProjects(true);
  };

  const handleOpenTeamList = () => {
    setShowOwnProjects(false);
  };

  const handleButtonClick = (path) => {
    navigate(path)
  }
  return (
    <div>
      <Title>Team Projects</Title>
      <Button
        handleOpenOwnList={handleOpenOwnList}
        handleOpenTeamList={handleOpenTeamList}
        handleButtonClick={handleButtonClick}
      />
      {showOwnProjects ? <OwmItems /> : <ProjectItems />}
    </div>
  );
};

export default Projects;
