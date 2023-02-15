import { Profile } from "./components/Profile";
import { SearchPosts } from "./components/SearchPosts";
import { Container } from "./styles";

export function Home() {
	return (
		<Container>
			<Profile />
			<SearchPosts />
		</Container>
	);
}