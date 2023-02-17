import axios from 'axios';

const { VITE_TokenGithubKey } = import.meta.env;
const accessToken = VITE_TokenGithubKey;

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/vnd.github.v3+json',
  }
});
