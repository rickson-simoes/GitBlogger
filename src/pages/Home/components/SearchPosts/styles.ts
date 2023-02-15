import styled from "styled-components";

export const SearchPostsContainer = styled.div`
  margin-top: 2rem;
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