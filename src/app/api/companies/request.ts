import requestAxios, { setBaseURL } from "@/services/axios";
import { CompaniesProps } from "./types";

const EXTERNAL_COMPANIES_ROUTER =
  "https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies";

setBaseURL(EXTERNAL_COMPANIES_ROUTER);

export const getCompanies = async () => {
  try {
    const { data } = await requestAxios.get<CompaniesProps[]>("/");

    return data;
  } catch (error) {
    console.error("Erro ao buscar parceiros:", error);
    throw new Error("Erro ao buscar parceiros");
  }
};

export const getCompaniesById = async (id: string) => {
  try {
    const { data } = await requestAxios.get<CompaniesProps>(`/${id}`);
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const deleteCompanieById = async (id: string) => {
  try {
    await requestAxios.delete(`/${id}`);
    return;
  } catch (error) {
    throw new Error();
  }
};

export const postCompanie = async (partnerData: CompaniesProps) => {
  try {
    const { data } = await requestAxios.post<CompaniesProps>("/", partnerData);
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const pustCompanieById = async (partnerData: CompaniesProps) => {
  const { id, ...updatedData } = partnerData;

  try {
    const { data } = await requestAxios.put<CompaniesProps>(
      `/${id}`,
      updatedData
    );
    return data;
  } catch (error) {
    throw new Error();
  }
};
