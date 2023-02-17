import axios from 'axios';

const accessToken = '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';

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/vnd.github.v3+json',
  }
});
