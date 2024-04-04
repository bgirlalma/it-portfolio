import Logo from './Logo/logo';
import HeaderNavigate from './Navigate/headerNav';
import { IoMenu } from 'react-icons/io5';

export const Header = () => {
  return (
    <div>
      <Logo />
      <div>
        <IoMenu />
        <HeaderNavigate />
      </div>

      <div>
        <HeaderNavigate />
      </div>
    </div>
  );
};
