import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container } from './styles';
import { NavLink } from 'react-router-dom';
import { IPostContent } from '@/types/appCustomTypes/types';

export function PostInformation(post: IPostContent) {
  console.log(post);
  return (
    <Container>
      <section>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back</span>
        </NavLink>

        <a href={post.html_url} target="_blank">
          <span>See on Github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </section>

      <section>
        <strong>{post.title}</strong>
      </section>

      <section>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>rickson-simoes</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{post.created_at}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{post.comments} Comments</span>
        </div>
      </section>
    </Container>
  )
};