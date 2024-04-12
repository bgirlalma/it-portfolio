import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo/logo';
import HeaderNavigate from './Navigate/headerNav';
import { MenuSvg } from '../Image/svg/menu';
import { CloseSvg } from '../Image/svg/close';
import {
  HeaderContainer,
  WrappMenuContainer,
  ButtonMenu,
  MenuMobile,
  CloseButton,
  MenuNav,
  TabletContainer,
} from './Header.styled';

export const Header = () => {
  //page navigation
  const navigate = useNavigate();

  //got state open/close modal menu
  const [openMenu, setOpenMenu] = useState(false);

  //opem modal menu
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  //close modal menu
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  //page navigation. Close modal menu
  const handleNavlinkClick = (path) => {
     console.log('Navigating to:', path);
    navigate(path);
    setOpenMenu(false);
  };



  return (
    <HeaderContainer>
      <Logo />

      <WrappMenuContainer>
        <ButtonMenu onClick={handleOpenMenu}>
          <MenuSvg />
        </ButtonMenu>

        {openMenu && (
          <MenuMobile>
            <CloseButton onClick={handleCloseMenu}>
              <CloseSvg />
            </CloseButton>
            <MenuNav>
              <HeaderNavigate handleNavlinkClick={handleNavlinkClick} />
            </MenuNav>
          </MenuMobile>
        )}
      </WrappMenuContainer>

        <TabletContainer>
          <HeaderNavigate />
        </TabletContainer>
      
    </HeaderContainer>
  );
};
