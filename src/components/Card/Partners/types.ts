export type CardPartnersProps = {
  name: string;
  description: string;
  id: string;
  clients: number;
  projects: number;
  linkGithub: string;
  linkDocs: string;
  createdAt: string;
  handleClickCard: (id: string) => void;
};
