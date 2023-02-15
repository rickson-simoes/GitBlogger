import { SearchContent, SearchPostsContainer } from "./styles";

export function SearchPosts() {
  return (
    <SearchPostsContainer>
      <SearchContent>
        <div>
          <strong>Posts</strong>
          <span>6 posts</span>
        </div>

        <form>
          <input type="text" placeholder="Search content" />
        </form>
      </SearchContent>

      <section>

      </section>
    </SearchPostsContainer>
  )
};