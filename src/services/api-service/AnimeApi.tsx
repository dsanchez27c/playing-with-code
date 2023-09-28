import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '../base/Base';

const insAnimeList = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export { insAnimeList };
