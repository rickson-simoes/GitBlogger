import { HeaderContainer } from "./styles";
import GitBloggerText from '@/assets/GitBloggerText.svg';
import GitBloggerLogo from '@/assets/GitBloggerLogo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={GitBloggerLogo} alt="" />
        <img src={GitBloggerText} alt="" />
      </div>
    </HeaderContainer>
  )
};