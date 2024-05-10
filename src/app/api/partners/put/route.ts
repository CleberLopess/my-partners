import requestAxios from "@/services/axios";

type pustTypes = {
  createdAt: string;
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
  clients: (string | number)[];
  projects: (string | number)[];
  id: string;
  isActive: boolean;
};

export const pustPartnersById = async (partnerData: pustTypes) => {
  const { id, ...updatedData } = partnerData;

  try {
    const { data } = await requestAxios.put<pustTypes>(`/${id}`, updatedData);
    return data;
  } catch (error) {
    console.error(`Erro ao atualizar parceiro com ID ${id}:`, error);
    throw new Error(`Erro ao atualizar parceiro com ID ${id}`);
  }
};
