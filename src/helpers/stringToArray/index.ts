export const stringToArray = (string: string, separator = ",") => {
  const array = string.split(separator).map((item) => item.trim());
  return array;
};
