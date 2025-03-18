import axios, { AxiosRequestConfig } from "axios";

const apiAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CORE_SERVICE_HOST}/api`,
  timeout: 5000,
  withCredentials: true,
});

apiAxios.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default apiAxios;
