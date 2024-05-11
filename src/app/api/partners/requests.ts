import requestAxios, { setBaseURL } from "@/services/axios";
import { PartnersType } from "./types";

const PARTNERS_ROUTER =
  "https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners";

setBaseURL(PARTNERS_ROUTER);

export const getPartners = async () => {
  try {
    const { data } = await requestAxios.get<PartnersType[]>("/");

    return data;
  } catch (error) {
    throw new Error();
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

export const deletePartnersById = async (id: string) => {
  try {
    await requestAxios.delete(`/${id}`);
    return;
  } catch (error) {
    throw new Error();
  }
};

export const postPartners = async (partnerData: PartnersType) => {
  try {
    const { data } = await requestAxios.post<PartnersType>("/", partnerData);
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const pustPartnersById = async (partnerData: PartnersType) => {
  const { id, ...updatedData } = partnerData;

  try {
    const { data } = await requestAxios.put<PartnersType>(
      `/${id}`,
      updatedData
    );
    return data;
  } catch (error) {
    throw new Error();
  }
};
