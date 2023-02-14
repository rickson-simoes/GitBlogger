import styled from "styled-components";
import GitBloggerCover from '@/assets/Cover.svg';

export const HeaderContainer = styled.header`
  background-image: url(${GitBloggerCover});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0px 1px 9px 7px ${props => props.theme.baseBackground};

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 296px;
  }
`