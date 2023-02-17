import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  background: ${props => props.theme.baseProfile};
  padding: 2rem;
  border-radius: 6px;
  margin-top: -6.25rem;
`