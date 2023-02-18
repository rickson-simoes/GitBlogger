import { useEffect, useState } from "react";
import { Profile } from "./components/Profile";
import { SearchPosts } from "./components/SearchPosts";
import { Container } from "./styles";
import { IProfileData } from "./components/Profile/ProfileContent";
import { getGithubProfileContent } from "./components/Requests/profileContentReq";

export type IStatus = "loading" | "error" | "success" | "forbidden";

export function Home() {
	const [profileData, setProfileData] = useState<IProfileData>({} as IProfileData)
	const [status, setStatus] = useState<IStatus>("loading");
	const username = 'rickson-simoes';

	async function getDataForProfileContent() {
		const [status, profileData] = await getGithubProfileContent(username);

		setStatus(status);
		setProfileData(profileData);
	}

	useEffect(() => {
		getDataForProfileContent();
	}, []);

	return (
		<Container>
			<Profile profileData={profileData} status={status} />

			<SearchPosts />
		</Container>
	);
}