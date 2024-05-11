export enum LOCALSTORAGE_KEYS {
  USER = "user",
  PAGINATION_PARTNERS = "paginationPartners",
  REDIRECT_ROUTE = "redirectRoute",
}

type ValuesOfEnum<T extends { [key: string]: string }> = T[keyof T];

export type LocalStorageKeyTypes = ValuesOfEnum<typeof LOCALSTORAGE_KEYS>;
