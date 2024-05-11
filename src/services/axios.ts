import axios, { AxiosRequestConfig } from "axios";

export const headers = {
  "Content-Type": "application/json",
};

export const config: AxiosRequestConfig = {
  headers,
};

const requestAxios = axios.create(config);

requestAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error.response);
    return Promise.reject(error);
  }
);

export const setBaseURL = (baseURL: string) => {
  requestAxios.defaults.baseURL = baseURL;
};

export default requestAxios;
