export type PartinersViewProps = {
  name: string;
  description: string;
  id: string;
  clients: string[];
  projects: string[];
  linkGithub: string;
  linkDocs: string;
  createdAt: string;
  handleClickEdit: () => void;
  handleClickDelete: () => void;
};
