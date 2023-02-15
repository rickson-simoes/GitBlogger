import { ProfileContainer, ProfileInfo } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/37545464" alt="Profile Github Picture from Rickson Simões" />

      <ProfileInfo>
        <section>
          <strong>Rickson Simões</strong>
          <a href="https://github.com/rickson-simoes" target="_blank">
            <span>Github </span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </section>

        <section>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </section>

        <section>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>rickson-simoes</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>GitBlogger</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 Followers</span>
          </div>
        </section>
      </ProfileInfo>
    </ProfileContainer>
  )
};