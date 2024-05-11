import requestAxios from "@/services/axios";
import { PartnersType } from "../types";

export const getPartners = async () => {
  try {
    const { data } = await requestAxios.get<PartnersType[]>("/");

    return data;
  } catch (error) {
    console.error("Erro ao buscar parceiros:", error);
    throw new Error("Erro ao buscar parceiros");
  }
};

export const getPartnersById = async (id: string) => {
  try {
    const { data } = await requestAxios.get<PartnersType>(`/${id}`);
    return data;
  } catch (error) {
    throw new Error();
  }
};
