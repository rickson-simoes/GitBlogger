import styled from "styled-components";
import GitBloggerCover from '@/assets/Cover.svg';

export const HeaderContainer = styled.header`
  background-image: url(${GitBloggerCover});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0px 1px 9px 7px ${props => props.theme.baseBackground};

  height: 296px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    height: 13.125rem;
  }
`