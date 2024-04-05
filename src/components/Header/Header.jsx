import {
  useState
} from 'react';
import {useNavigate} from 'react-router-dom'
import Logo from './Logo/logo';
import HeaderNavigate from './Navigate/headerNav';
import { MenuSvg } from '../Image/svg/menu';
import { CloseSvg } from '../Image/svg/close';
import { HeaderContainer,WrappMenuContainer, ButtonMenu,MenuMobile,CloseButton,MenuNav, TabletContainer } from './Header.styled';

export const Header = () => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  }

  const handleCloseMenu = () => {
    setOpenMenu(false)
  }

  const handleNavlinkClick = path => {
    navigate(path)
    setOpenMenu(false)
  }

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
              <HeaderNavigate handleNavlinkClick={ handleNavlinkClick} />
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
