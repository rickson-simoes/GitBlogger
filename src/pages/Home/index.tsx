import { ErrorContainer } from "@/components/ErrorContainer";
import { MainContainer } from "@/components/MainContainer";
import { api } from "@/services/api";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { IProfile, Profile } from "./components/Profile";
import { SearchPosts } from "./components/SearchPosts";
import { Container } from "./styles";
import { AxiosError } from 'axios';

export type IStatus = "loading" | "error" | "success" | "forbidden";

export function Home() {
	const [profileData, setProfileData] = useState<IProfile>({} as IProfile)
	const [status, setStatus] = useState<IStatus>("loading");
	const username = 'rickson-simoes';

	async function getGithubContent() {
		try {
			const response = await api.get<IProfile>(`/users/${username}`);

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
			{status == "loading" && <MainContainer children={<FontAwesomeIcon icon={faArrowsSpin} size="8x" spin={true} />} />}
			{status == "success" && <Profile {...profileData} />}
			{status == "error" && <MainContainer children={<ErrorContainer status={status} />} />}
			{status == "forbidden" && <MainContainer children={<ErrorContainer status={status} />} />}
			<SearchPosts />
		</Container>
	);
}