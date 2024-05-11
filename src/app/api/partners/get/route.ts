import requestAxios from "@/services/axios";

export type getTypes = {
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

export const getPartners = async () => {
  try {
    const { data } = await requestAxios.get<getTypes[]>("/");

    return data;
  } catch (error) {
    console.error("Erro ao buscar parceiros:", error);
    throw new Error("Erro ao buscar parceiros");
  }
};

export const getPartnersById = async (id: string) => {
  try {
    const { data } = await requestAxios.get<getTypes>(`/${id}`);
    return data;
  } catch (error) {
    console.error(`Erro ao buscar parceiro com ID ${id}:`, error);
    throw new Error(`Erro ao buscar parceiro com ID ${id}`);
  }
};
