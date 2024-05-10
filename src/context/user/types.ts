export type UserContextType = {
  user: {
    name: string;
  };
  setUser: React.Dispatch<React.SetStateAction<{ name: string }>>;
};
