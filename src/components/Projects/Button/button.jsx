import { useLocation } from 'react-router-dom';
import { ButtonContainer, ButtonTeam, ButtonOwn } from './button.styled';
import { useEffect, useState } from 'react';

const Button = ({
  handleOpenOwnList,
  handleOpenTeamList,
}) => {
  const location = useLocation();

  //got current state ''
  const [currentPath, setCurrentPath] = useState('');


  useEffect(() => {
    //got ingo with currentPath
    const storedPath = localStorage.getItem('currentPath');

    //initialization storedPath. Show storedPath or location.pathname
    const initialPath =
      storedPath !== null && storedPath !== undefined
        ? storedPath
        : location.pathname;

    //update state
    setCurrentPath(initialPath);

    //write down update state in the localStorage
    localStorage.setItem('currentPath', initialPath);
  }, [location.pathname]);
  

  //path = currentPath. handler = callback function. Will be called after updating the currentPath 
  const handleClick = (path, handler) => {

    //update state path
    setCurrentPath(path);

    //write down update state in the localStorage
    localStorage.setItem('currentPath', path);

    //called handler
    handler();
  }



  return (
    <ButtonContainer>
      <ButtonTeam
        type="button"
        active={currentPath === '/team' ? 'true' : 'false'}
        onClick={() => handleClick('/team', handleOpenTeamList)}
      >
        Team
      </ButtonTeam>
      <ButtonOwn
        type="button"
        active={currentPath === '/own' ? 'true' : 'false'}
        onClick={() => handleClick('/own', handleOpenOwnList)}
      >
        Own
      </ButtonOwn>
    </ButtonContainer>
  );
};

export default Button;
