import { cwd } from "process";

export const showCurrentDir = () => {
  console.log(`You are currently in ${cwd()}`);
};
