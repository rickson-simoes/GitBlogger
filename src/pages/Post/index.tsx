import { useEffect, useState } from "react";
import { IPostContent, PostParams } from "@/types/appCustomTypes/types";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { PostInformation } from "./PostInformation";
import { PostContainer } from "./styles";
import { api } from "@/services/api";
import { formatDistance } from 'date-fns';
import { dateFormat } from "@/helpers/dateFormat";

export function Post() {
  const [post, setPost] = useState<IPostContent>({} as IPostContent);
  let { id } = useParams<PostParams>();

  const username = "rickson-simoes";
  const repositoryName = "GitBlogger"

  async function getPostIssueContent() {
    const response = await api.get<IPostContent>(`/repos/${username}/${repositoryName}/issues/${id}`);
    const { data } = response;

    const postObj: IPostContent = {
      ...data,
      created_at: dateFormat(data.created_at)
    }

    setPost(postObj);
  };

  useEffect(() => {
    getPostIssueContent();
  }, [])

  return (
    <PostContainer>
      <PostInformation {...post} />

      <article>
        <ReactMarkdown>
          {post.body}
        </ReactMarkdown>
      </article>
    </PostContainer>
  )
};