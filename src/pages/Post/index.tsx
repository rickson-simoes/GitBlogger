import { useEffect, useState } from "react";
import { IPostContent, PostParams } from "@/types/appCustomTypes/types";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { PostInformation } from "./PostInformation";
import { PostContainer } from "./styles";
import { api } from "@/services/api";

export function Post() {
  const [post, setPost] = useState<IPostContent>({} as IPostContent);
  let { id } = useParams<PostParams>();

  const username = "rickson-simoes";
  const repositoryName = "GitBlogger"

  async function getPostIssueContent() {
    const response = await api.get<IPostContent>(`/repos/${username}/${repositoryName}/issues/${id}`);

    setPost(response.data);
  };

  useEffect(() => {
    getPostIssueContent();
  }, [])

  return (
    <PostContainer>
      {/* passar as props  */}
      <PostInformation {...post} />

      <article>
        <ReactMarkdown>
          {post.body}
        </ReactMarkdown>
      </article>
    </PostContainer>
  )
};