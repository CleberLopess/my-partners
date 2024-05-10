export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  title?: string;
  id?: string;
  name?: string;
};
