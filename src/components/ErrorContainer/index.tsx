import { IErrorContainer } from "@/types/appCustomTypes/types";
import { faBan, faBomb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";

export function ErrorContainer({ status }: IErrorContainer) {
  return (
    <Container>
      {status == "error" &&
        <>
          <FontAwesomeIcon icon={faBomb} size="8x" shake={true} />
          <span>Oops! Seems like we don't know who this user is.</span>
          <span>No worries, the bomb only shakes... until now 😨</span>
        </>}

      {status == "forbidden" &&
        <>
          <FontAwesomeIcon icon={faBan} size="8x" fade={true} />
          <span>Oops! Too many requests, go drink some water.</span>
          <span>Get back here in about one hour.</span>
        </>}
    </Container>
  )
};