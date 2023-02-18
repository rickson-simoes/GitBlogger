import { ErrorContainer } from "@/components/ErrorContainer";
import { MainContainer } from "@/components/MainContainer";
import { IProfile } from "@/types/appCustomTypes/types";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContent } from "./ProfileContent";


export function Profile({ status, profileData }: IProfile) {
  return (
    <>
      {status == "loading" && <MainContainer children={<FontAwesomeIcon icon={faArrowsSpin} size="8x" spin={true} />} />}
      {status == "success" && <ProfileContent {...profileData} />}
      {status == "error" && <MainContainer children={<ErrorContainer status={status} />} />}
      {status == "forbidden" && <MainContainer children={<ErrorContainer status={status} />} />}
    </>
  )
};