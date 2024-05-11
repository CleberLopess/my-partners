export type CardCompaniesProps = {
  createdAt: string;
  companyName: string;
  collaboratorsCount: number;
  isActive?: boolean;
  lastSubmit: string;
  id: string;
  handleClickCard: (id: string) => void;
};
