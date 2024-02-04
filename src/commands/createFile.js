import { writeFile, existsSync } from "fs";
import path from "path";
import { cwd } from "process";

export const createFile = async (fileName) => {
  const fullPath = path.join(cwd(), fileName);
  if (existsSync(fullPath)) {
    console.error("Operation failed, such a file already exists");
  }
  writeFile(fullPath, "", (error) => {
    error ? console.log(error) : null;
  });
};
