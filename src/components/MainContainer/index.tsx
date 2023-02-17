import { ReactNode } from "react";
import { Container } from "./styles";

interface IMainContainer {
  children: ReactNode;
}

export function MainContainer({ children }: IMainContainer) {
  return (
    <Container>
      {children}
    </Container>
  )
};