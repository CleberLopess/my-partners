import { LegacyRef } from "react";

export type InputProps = {
  name: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  maxLength?: number;
  minLength?: number;
  title?: string;
  required?: boolean;
  ref?: LegacyRef<HTMLInputElement> | undefined;
};
