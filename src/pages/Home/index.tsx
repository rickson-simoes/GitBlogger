import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Profile } from "./components/Profile";
import { SearchPosts } from "./components/SearchPosts";
import { Container } from "./styles";
import { AxiosError } from 'axios';
import { IProfileData } from "./components/Profile/ProfileContent";

export type IStatus = "loading" | "error" | "success" | "forbidden";

export function Home() {
	const [profileData, setProfileData] = useState<IProfileData>({} as IProfileData)
	const [status, setStatus] = useState<IStatus>("loading");

	const username = 'rickson-simoes';

	async function getGithubContent() {
		try {
			const response = await api.get<IProfileData>(`/users/${username}`);

			if (response.status === 200) {
				setProfileData(response.data);
				setStatus("success");
			}
		} catch (err) {
			const error = err as AxiosError;

			if (error.response?.status === 404) {
				setStatus("error");
			}

			if (error.response?.status === 403) {
				setStatus("forbidden");
			}
		}
	}
	useEffect(() => {
		getGithubContent();
	}, []);

	return (
		<Container>
			<Profile profileData={profileData} status={status} />

			<SearchPosts />
		</Container>
	);
}