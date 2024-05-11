export const getDate = (date: string) => {
  const newDate = new Date(date);

  const day = newDate.getUTCDate();
  const month = newDate.getUTCMonth() + 1;
  const year = newDate.getUTCFullYear();
  const hours = newDate.getUTCHours();
  const minutes = newDate.getUTCMinutes();
  const second = newDate.getUTCSeconds();

  const dateFormated = `${day}/${month}/${year} ${hours}:${minutes}:${second}`;

  return { day, month, year, hours, minutes, second, dateFormated };
};
