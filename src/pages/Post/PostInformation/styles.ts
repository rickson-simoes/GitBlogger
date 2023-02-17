import styled from "styled-components";

export const Container = styled.section`
  background-color: ${props => props.theme.baseProfile};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -6.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  section {
    :first-child {
    color: ${props => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0;

      a {
        line-height: 1.6;

        &:hover {
          box-shadow: inset -1px -10.5px 0px -9px ${props => props.theme.blue};
        }
      }

      span {
        :first-child {
          margin-right: 0.5rem;
        }

        :last-child {
          margin-left: 0.5rem;
        }      
      }
    }

    :nth-child(2) {
      color: ${props => props.theme.baseTitle};
      font-size: 1.5rem;
    }

    :last-child {
      display: flex;
      gap: 2rem;
  
      > div {
        color: ${props => props.theme.baseSpan};
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`