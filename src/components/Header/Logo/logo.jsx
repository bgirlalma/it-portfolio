import Image from './Photo/Akulina.png'
import { LogoContainer, LogoImage } from './logo.styled';
const Logo = () => {
    return (
      <LogoContainer>
        <LogoImage src={Image} alt="logo" />
      </LogoContainer>
    );
}

export default Logo;