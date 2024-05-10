import { LocalStorageKeyTypes } from "./types";

export const setLocalStorage = (key: LocalStorageKeyTypes, value: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, value);
  } else {
    console.error("O objeto localStorage não está disponível neste ambiente.");
  }
};

export const getLocalStorage = (key: LocalStorageKeyTypes) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  } else {
    console.error("O objeto localStorage não está disponível neste ambiente.");
    return null;
  }
};

export const removeLocalStorage = (key: LocalStorageKeyTypes) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  } else {
    console.error("O objeto localStorage não está disponível neste ambiente.");
  }
};
