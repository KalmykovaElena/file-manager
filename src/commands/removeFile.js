import { existsSync, rm } from "fs";
import path from "path";
import { cwd } from "process";

export const removeFile = async (pathToFile) => {
  const sourcePath = path.resolve(cwd(), pathToFile);

  if (!existsSync(sourcePath)) {
    throw new Error("Operation failed");
  }

  rm(sourcePath, { recursive: true }, (error) => {
    console.log(error ? error : "The File has been deleted");
  });
};
