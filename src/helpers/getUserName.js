import { USER_NAME } from "../constants/variables.js";

export const getUserName = () =>
  process.argv.find((item) => item.startsWith(USER_NAME))?.split("=")[1] ||
  "Dear user";
