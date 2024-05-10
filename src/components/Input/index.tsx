import { ChangeEvent, useRef } from "react";
import { InputProps } from "./types";

export const InputComponent = ({
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
  autoComplete = "on",
  className,
  disabled,
  id,
  maxLength,
  minLength,
  title,
  required,
  ref,
}: InputProps) => {
  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(ev);
    }
  };

  if (type === "checkbox") {
    return (
      <div className={`${className} flex items-start`}>
        <div className="flex items-center h-5">
          <input
            ref={ref}
            className="focus:ring-3 focus:ring-blue-300 h-4 w-4 text-blue-600 border-gray-300 rounded-full"
            type={type}
            name={name}
            id={id}
            onChange={handleInputChange}
            value={value}
            disabled={disabled}
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor={id}
            className="font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        name={name}
        id={id}
        className={`${
          disabled ? "cursor-not-allowed" : ""
        } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        title={title}
        onChange={handleInputChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};
