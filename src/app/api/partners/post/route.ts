import requestAxios from "@/services/axios";
import { PartnersType } from "../types";

export const postPartners = async (partnerData: PartnersType) => {
  try {
    const { data } = await requestAxios.post<PartnersType>("/", partnerData);
    return data;
  } catch (error) {
    console.error("Erro ao criar parceiro:", error);
    throw new Error("Erro ao criar parceiro");
  }
};
