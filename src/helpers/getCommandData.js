export const getCommandData = (data) =>
  data
    .toString()
    .split(" ")
    .map((e) => e.trim())
    .filter((item) => item);
