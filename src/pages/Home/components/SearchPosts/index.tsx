import { PostList, SearchContent, SearchPostsContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "@/services/api";
import { IPostContent, ISearchPosts } from "@/types/appCustomTypes/types";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { dateFormat } from "@/helpers/dateFormat";


export function SearchPosts({ username, repositoryName }: ISearchPosts) {
  const [posts, setPosts] = useState<IPostContent[]>([] as IPostContent[]);
  const navigate = useNavigate();

  function navigateTo(params: number) {
    navigate(`/post/${params}`);
  }

  async function getAllposts() {
    const response = await api.get<IPostContent[]>(`/repos/${username}/${repositoryName}/issues`);

    setPosts(response.data)
  };


  useEffect(() => {
    getAllposts();
  }, []);

  return (
    <SearchPostsContainer>
      <SearchContent>
        <div>
          <strong>Posts</strong>
          <span>{posts.length} posts</span>
        </div>

        <form>
          <input type="text" placeholder="Search content" />
        </form>
      </SearchContent>

      <PostList>
        {posts.map((issuePost) => (
          <article onClick={() => navigateTo(issuePost.number)} key={issuePost.number}>
            <div>
              <strong>{issuePost.title}</strong>
              <span>{dateFormat(issuePost.created_at)}</span>
            </div>

            <span>
              <ReactMarkdown>
                {issuePost.body}
              </ReactMarkdown>
            </span>
          </article>
        ))}
      </PostList>
    </SearchPostsContainer>
  )
};