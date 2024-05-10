import axios, { AxiosRequestConfig } from "axios";

const PARTNERS_ROUTER = process.env.PARTNERS_ROUTER;
const EXTERNAL_COMPANIES_ROUTER = process.env.EXTERNAL_COMPANIES_ROUTER;

export const headers = {
  "Content-Type": "application/json",
};

export const config: AxiosRequestConfig = {
  baseURL: PARTNERS_ROUTER,
  headers,
};

const requestAxios = axios.create(config);

requestAxios.interceptors.response.use(
  (response) => response,
  (error) => console.error(error.response)
);

export default requestAxios;
