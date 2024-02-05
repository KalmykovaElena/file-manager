import { user } from "../index.js";

export const exitFromApp = async () => {
  console.log(`Thank you for using File Manager, ${user}, goodbye!`);
  process.exit(0);
};
