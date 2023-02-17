import styled from "styled-components";

export const SearchPostsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SearchContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;    
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      color: ${props => props.theme.baseSubtitle};
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme.baseSpan};
    }
  }

  form {
    display: flex;
    input {
      background-color: ${props => props.theme.baseInput};
      color: ${props => props.theme.baseSpan};
      border: 1px solid ${props => props.theme.baseBorder};
      border-radius: 6px;
      padding: 12px 16px;      
      flex: 1;
      transition: all 0.2s;

      &::placeholder {
        color: ${props => props.theme.baseLabel}
      }

      &:focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${props => props.theme.blue};
      }
    }
  }
`

export const PostList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  article {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background-color: ${props => props.theme.basePost};
    border-radius: 1.125rem;
    padding: 2rem;

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      box-shadow: inset 14px -1px 0px -3px ${props => props.theme.blue};
      filter: brightness(1.18);
    }

    div {
      display: flex;
      gap: 1rem;
      justify-content: space-between;

      strong {
        color: ${props => props.theme.baseTitle};
        font-size: 1.25rem;
        line-height: 160%;
        max-width: 16rem;
      }

      span {
        color: ${props => props.theme.baseSpan};
        font-size: 0.875rem;
      }
    }

    span {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`;