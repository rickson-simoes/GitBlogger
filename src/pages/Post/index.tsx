import { useParams } from "react-router-dom";
import { PostInformation } from "./PostInformation";

import { PostContainer } from "./styles";

export function Post() {
  // let { id } = useParams();

  return (
    <PostContainer>
      <PostInformation postId="123" />
    </PostContainer>
  )
};