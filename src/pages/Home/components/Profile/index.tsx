import { ErrorContainer } from "@/components/ErrorContainer";
import { MainContainer } from "@/components/MainContainer";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IStatus } from "../..";
import { IProfileData, ProfileContent } from "./ProfileContent";

interface IProfile {
  status: IStatus;
  profileData: IProfileData;
}


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