import axios, { AxiosRequestConfig } from "axios";

const PARTNERS_ROUTER =
  "https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners";
const EXTERNAL_COMPANIES_ROUTER =
  "https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies";

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
