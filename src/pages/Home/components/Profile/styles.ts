import styled from "styled-components";

export const ProfileImage = styled.img`
  border-radius: 8px;
  width: 148px;
  height: 148px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section:first-child{
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.baseTitle};

    strong {
      font-size: 1.5rem;
    }

    a {
      align-self: center;
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 800;
      padding-bottom: 3px;
      transition: all 0.2s;

      span {
        margin-right: 5px;
      }


      &:hover {
        box-shadow: inset -1px -10.5px 0px -9px ${props => props.theme.blue};
      }
    }
  }

  section:nth-child(2){
    padding-bottom: 1.2rem;
  }

  section:last-child{
    display: flex;
    gap: 2rem;

     div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

       svg {
        color: ${props => props.theme.baseLabel};
      }
    }    
  }
`