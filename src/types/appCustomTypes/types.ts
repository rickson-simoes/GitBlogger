import { ReactNode } from "react";

export type IStatus = "loading" | "error" | "success" | "forbidden";

export interface IProfileData {
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  login: string;
  followers: number;
  public_repos: number;
}

export interface IErrorContainer {
  status: IStatus;
}

export interface IMainContainer {
  children: ReactNode;
}

export interface IProfile {
  status: IStatus;
  profileData: IProfileData;
}

export interface IPostInformation {
  postId: string;
}

export interface ISearchPosts {
  username: string;
  repositoryName: string;
}

export interface IIssuePost {
  title: string;
  created_at: Date;
  body: string;
  number: number;
  comments?: string;
  html_url?: string;
}