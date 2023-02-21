import { PostList, SearchContent, SearchPostsContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "@/services/api";
import { IPostContent, ISearchName, ISearchPosts } from "@/types/appCustomTypes/types";
import { ChangeEvent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { dateFormat } from "@/helpers/dateFormat";
import { useForm } from 'react-hook-form';
import { useDebounce } from 'usehooks-ts'

interface ISearchPostsThroughInput {
  items: IPostContent[];
}

export function SearchPosts({ username, repositoryName }: ISearchPosts) {
  const [posts, setPosts] = useState<IPostContent[]>([] as IPostContent[]);
  const [searchName, setSearchName] = useState("");
  const debouncedValue = useDebounce<string>(searchName);

  const navigate = useNavigate();
  const { register } = useForm<ISearchName>();

  function navigateTo(params: number) {
    navigate(`/post/${params}`);
  }

  async function getAllposts() {
    const response = await api.get<IPostContent[]>(`/repos/${username}/${repositoryName}/issues`);

    setPosts(response.data)
  };

  function getPostThroughSearchInput(e: ChangeEvent<HTMLInputElement>) {
    const queryString = 'q=' + encodeURIComponent(`${e.target.value} repo:${username}`) + `/${repositoryName}`;

    setSearchName(queryString);
  };

  async function getPost() {
    if (debouncedValue !== "" && searchName !== "") {
      const response = await api.get<ISearchPostsThroughInput>(`/search/issues?${searchName}`);

      setPosts(response.data.items);
    }
  };

  useEffect(() => {
    getAllposts();
  }, []);

  useEffect(() => {
    getPost();
  }, [debouncedValue])

  return (
    <SearchPostsContainer>
      <SearchContent>
        <div>
          <strong>Posts</strong>
          <span>{posts.length} posts</span>
        </div>

        <form>
          <input
            type="text"
            placeholder="Search content"
            {...register('search', {
              onChange: getPostThroughSearchInput,
            })
            }
          />
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