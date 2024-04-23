import Button from './Button/button';
import ProjectItems from './TeamProjects/teamIProject';
import { Title } from './Projects.styled';
import OwmItems from './OwmProjects/owmItems';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  //set current value active tab with current path URL
  const [activeTab, setActiveTab] = useState(
    location.pathname.includes('own') ? 'own' : 'team'
  );

  //handler function click 
  const handleButtonClick = (tab) => {
    //set active tab
    setActiveTab(tab)

    //redirecting the user in the page
    navigate(`/projects/${tab}`);
  }
  
  //check current path URL
  useEffect(() => {
   //if current path haven`t 'projects', set active tab 'Team'
   if (!location.pathname.includes('projects')) {
     setActiveTab('team');
    }
    
    //update object when you change current path URL
 }, [location.pathname]);
  
  return (
    <div>
      <Title>Team Projects</Title>
      <Button
        activeTab={activeTab}
       handleButtonClick={handleButtonClick}
      />
      {/* render project list fit current path */}
      {activeTab === 'own' ? <OwmItems /> : <ProjectItems />}
    </div>
  );
};

export default Projects;
