// import { useLocation } from 'react-router-dom';
import { ButtonContainer, ButtonTeam, ButtonOwn } from './button.styled';
// import { useEffect, useState } from 'react';

const Button = ({ activeTab, handleButtonClick}) => {
  return (
    <ButtonContainer>
      <ButtonTeam
        to="/projects/team"
        onClick={() => handleButtonClick('team')}
        className={activeTab === 'team' ? 'active' : ''}
      >
        Team
      </ButtonTeam>

      <ButtonOwn
        to="/projects/own"
        onClick={() => handleButtonClick('own')}
        className={activeTab === 'own' ? 'active' : ''}
      >
        Own
      </ButtonOwn>
    </ButtonContainer>
  );
};

export default Button;


 //   const location = useLocation();

  //   const storedPath = localStorage.getItem('currentPath');

  //   const initialPath = storedPath ? storedPath !== null || storedPath !== undefined : location.pathname;

  //   const [, setCurrentPath] = useState(initialPath);

  //   const updatePath = (path) => {
  //     setCurrentPath(path);
  //     localStorage.setItem('currentPath', path)
  //   }

  //   useEffect(() => {
  //     const handleLocationChange = () => {
  // updatePath(location.pathname)
  //     }

  //     window.addEventListener('localstate', handleLocationChange);

  //     return () => {
  //       window.removeEventListener('localstate', handleLocationChange)
  //     }

  //   },[location.pathname])
