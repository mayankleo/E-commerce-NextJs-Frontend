import axios from "axios";
import { cookies } from "next/headers";

export const getAccessToken = () => cookies().get('accessToken')?.value;

const AxiosInstance = axios.create({
    baseURL: process.env.DJANGO_SERVER_URL,
});

AxiosInstance.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default AxiosInstance;
