import { ProfileImage, ProfileInfo } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faSheetPlastic,
  faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { MainContainer } from "@/components/MainContainer";
import { IProfileData } from "@/types/appCustomTypes/types";

export function ProfileContent(profileInfo: IProfileData) {
  return (
    <MainContainer>
      <ProfileImage src={profileInfo.avatar_url} alt={`Profile Github Picture from ${profileInfo.name}`} />

      <ProfileInfo>
        <section>
          <strong>{profileInfo.name}</strong>
          <a href={profileInfo.html_url} target="_blank">
            <span>Github </span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </section>

        <section>
          {profileInfo.bio}
        </section>

        <section>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profileInfo.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faSheetPlastic} />
            <span>Public Repos: {profileInfo.public_repos}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{profileInfo.followers} Followers</span>
          </div>
        </section>
      </ProfileInfo>
    </MainContainer>
  )
};