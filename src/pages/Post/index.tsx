import { useParams } from "react-router-dom";

import { PostContainer, PostInformation } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Post() {
  // let { id } = useParams();
  return (
    <PostContainer>
      <PostInformation>
        <section>
          <span><FontAwesomeIcon icon={faChevronLeft} /> voltar</span>
          <span>ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span>
        </section>

        <section>
          <strong>Javascript Data types and data structures</strong>
        </section>

        <section>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>rickson-simoes</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 Comments</span>
          </div>
        </section>
      </PostInformation>
    </PostContainer>
  )
};