export enum LOCALSTORAGE_kEYS {
  USER = "user",
}

type ValuesOfEnum<T extends { [key: string]: string }> = T[keyof T];

export type LocalStorageKeyTypes = ValuesOfEnum<typeof LOCALSTORAGE_kEYS>;
