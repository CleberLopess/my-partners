import requestAxios from "@/services/axios";
import { PartnersType } from "../types";

export const pustPartnersById = async (partnerData: PartnersType) => {
  const { id, ...updatedData } = partnerData;

  try {
    const { data } = await requestAxios.put<PartnersType>(
      `/${id}`,
      updatedData
    );
    return data;
  } catch (error) {
    console.error(`Erro ao atualizar parceiro com ID ${id}:`, error);
    throw new Error(`Erro ao atualizar parceiro com ID ${id}`);
  }
};
