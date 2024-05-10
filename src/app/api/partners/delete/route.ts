import requestAxios from "@/services/axios";

export const deletePartnersById = async (id: string) => {
  try {
    await requestAxios.delete(`/${id}`);
    return;
  } catch (error) {
    console.error(`Erro ao excluir parceiro com ID ${id}:`, error);
    throw new Error(`Erro ao excluir parceiro com ID ${id}`);
  }
};
