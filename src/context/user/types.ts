export type UserContextType = {
  name: string;
};

export type UserContextContextType = {
  user: UserContextType;
  setUser: (user: { name: string }) => void;
};
