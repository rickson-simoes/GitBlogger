import { PostList, SearchContent, SearchPostsContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "@/services/api";
import { IIssuePost, ISearchPosts } from "@/types/appCustomTypes/types";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";


export function SearchPosts({ username, repositoryName }: ISearchPosts) {
  const [issuesPosts, setIssuesPosts] = useState<IIssuePost[]>([] as IIssuePost[]);
  const navigate = useNavigate();

  function navigateTo(params: number) {
    navigate(`/post/${params}`);
  }

  async function getAllIssuesPosts() {
    const response = await api.get<IIssuePost[]>(`https://api.github.com/repos/${username}/${repositoryName}/issues`);

    setIssuesPosts(response.data)
  };

  useEffect(() => {
    getAllIssuesPosts();
  }, []);

  return (
    <SearchPostsContainer>
      <SearchContent>
        <div>
          <strong>Posts</strong>
          <span>{issuesPosts.length} posts</span>
        </div>

        <form>
          <input type="text" placeholder="Search content" />
        </form>
      </SearchContent>

      <PostList>
        {issuesPosts.map((issuePost) => (
          <article onClick={() => navigateTo(issuePost.number)} key={issuePost.number}>
            <div>
              <strong>{issuePost.title}</strong>
              <span>{issuePost.created_at.toString()}</span>
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