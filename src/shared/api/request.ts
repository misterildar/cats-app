import axios from 'axios';
import { BASE_URL } from '@/shared/utils';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    'x-api-key': import.meta.env.VITE_API_KEY,
  },
});

export const request = async <T>(method: 'GET', url: string): Promise<T> => {
  const response = await api({ method, url });
  return response.data;
};
