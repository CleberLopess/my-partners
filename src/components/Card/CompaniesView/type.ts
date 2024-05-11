export type CompaniesViewProps = {
  createdAt: string;
  companyName: string;
  collaboratorsCount: number;
  isActive: boolean;
  lastSubmit: string;
  id?: string;
  handleClickEdit: () => void;
  handleClickDelete: () => void;
};
