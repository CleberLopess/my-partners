import requestAxios from "@/services/axios";

type postTypes = {
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

export const postPartners = async (partnerData: postTypes) => {
  try {
    const { data } = await requestAxios.post<postTypes>("/", partnerData);
    return data;
  } catch (error) {
    console.error("Erro ao criar parceiro:", error);
    throw new Error("Erro ao criar parceiro");
  }
};
