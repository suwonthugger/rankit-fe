import axios from 'axios';
import { getAuthHeader } from '../utils/auth';

const axiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
};

const authAxiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
};

const client = axios.create(axiosConfig);
const authClient = axios.create(authAxiosConfig);

// 요청인터셉터
authClient.interceptors.request.use(
  async (config) => {
    const accessToken = getAuthHeader();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      console.error('토큰이 없습니다. 로그인이 필요합니다.');
      window.location.replace('/');
    }
    return config;
  },
  (error) => {
    console.error(error);
  },
);

// 응답인터셉터
// authClient.interceptors.response.use(async (error) => {});

export { client, authClient };
