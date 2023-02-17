import styled from "styled-components";

export const PostContainer = styled.main`
    max-width: 54rem;
    margin: 0 auto;
`

export const PostInformation = styled.section`
  background-color: ${props => props.theme.baseProfile};
  border-radius: 10px;
  padding: 2rem;
  

  display: flex;
  flex-direction: column;
  gap: 1rem;


  section:first-child {
    color: ${props => props.theme.blue};
    font-size: 0.75rem;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0;
  }

  section:nth-child(2) {
    color: ${props => props.theme.baseTitle};
    font-size: 1.5rem;
  }

  section:last-child {
    display: flex;
    gap: 2rem;

    > div {
      color: ${props => props.theme.baseSpan};
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }    

  }
`