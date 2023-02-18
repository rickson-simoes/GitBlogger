import { IMainContainer } from "@/types/appCustomTypes/types";
import { ReactNode } from "react";
import { Container } from "./styles";

export function MainContainer({ children }: IMainContainer) {
  return (
    <Container>
      {children}
    </Container>
  )
};