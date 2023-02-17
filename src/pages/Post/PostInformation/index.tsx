import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container } from './styles';
import { NavLink } from 'react-router-dom';

interface PostInformation {
  postId: string;
}

export function PostInformation({ postId }: PostInformation) {
  return (
    <Container>
      <section>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>voltar</span>
        </NavLink>

        <a href="https://github.com/rickson-simoes" target="_blank">
          <span>ver no github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
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
    </Container>
  )
};