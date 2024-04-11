import { useEffect, useState } from 'react';
import { ListContainer, ListNavLink } from './headerNav.styled';
import { useLocation } from 'react-router-dom';

const HeaderNavigate = ({ handleNavlinkClick }) => {
  //отримуємо поточний url
  const location = useLocation();

  //створюємо локальний стейт, отримуємо поточний url за допомогою localStorage.getItem('currentPath'). Якщо значення === null, використовуємо location.pathname
   const [, setLocation] = useState(() => {
     const storedPath = localStorage.getItem('currentPath');
     return storedPath !== null && storedPath !== undefined
       ? storedPath
       : location.pathname;
   });

  //оновлюємо currentPath та зберігаємо його в локальному сховищі
  const updatePath = (path) => {
    setLocation(path);
    localStorage.setItem('currentPath', path);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      updatePath(location.pathname);
    };
    //реєструємо слухача подій при кліку на іншу сторінку
    window.addEventListener('popstate', handleLocationChange);

    //видаляємо слухача подій
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
