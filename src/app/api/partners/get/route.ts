import requestAxios from "@/services/axios";

type getTypes = {
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
  const { data } = await requestAxios.get<getTypes[]>("");
  return data;
};

export const getPartnersById = async (id: string) => {
  const { data } = await requestAxios.get<getTypes>(`/${id}`);
  return data;
};
