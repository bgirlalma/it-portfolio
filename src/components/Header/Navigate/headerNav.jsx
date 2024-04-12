import { useEffect, useState } from 'react';
import { ListContainer, ListNavLink } from './headerNav.styled';
import { useLocation } from 'react-router-dom';

const HeaderNavigate = ({ handleNavlinkClick }) => {
  //get current url
  const location = useLocation();

  //got info with currentPath
  const storedPath = localStorage.getItem('currentPath');

  //if storedPath !== null/undefined show storedPath. If storedPath === null/undefined show location.pathname
  const initialPath =
    storedPath !== null && storedPath !== undefined
      ? storedPath
      : location.pathname;

  const [, setLocation] = useState(initialPath);

  //update currentPath and save in the localStorage
  const updatePath = (path) => {
    setLocation(path);
    localStorage.setItem('currentPath', path);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      updatePath(location.pathname);
    };
    //registration listener event
    window.addEventListener('popstate', handleLocationChange);

    //delete listener event
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [location.pathname]);

  return (
    <nav>
      <ListContainer>
        <li>
          <ListNavLink
            to="/"
            onClick={() => handleNavlinkClick && handleNavlinkClick('/')}
          >
            Home
          </ListNavLink>
        </li>
        <li>
          <ListNavLink
            to="/projects"
            onClick={() =>
              handleNavlinkClick && handleNavlinkClick('/projects')
            }
          >
            Projects
          </ListNavLink>
        </li>
        <li>
          <ListNavLink
            to="/contacts"
            onClick={() =>
              handleNavlinkClick && handleNavlinkClick('/contacts')
            }
          >
            Contacts
          </ListNavLink>
        </li>
      </ListContainer>
    </nav>
  );
};

export default HeaderNavigate;
