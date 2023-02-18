import { api } from "@/services/api";
import { AxiosError } from "axios";
import { IStatus } from "../..";
import { IProfileData } from "../Profile/ProfileContent";

export const getGithubProfileContent = async (username: string): Promise<[IStatus, IProfileData]> => {
  let profileData: IProfileData = {} as IProfileData;
  let status: IStatus = "loading";

  try {
    const response = await api.get<IProfileData>(`/users/${username}`);

    if (response.status === 200) {
      profileData = response.data;
      status = "success";
    }

  } catch (err) {
    const error = err as AxiosError;

    if (error.response?.status === 404) {
      status = "error";
    }

    if (error.response?.status === 403) {
      status = "forbidden";
    }
  }

  return [status, profileData];
}