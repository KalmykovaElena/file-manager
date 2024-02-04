import fs, { existsSync } from "fs";
import path from "path";
import { cwd } from "process";

export const renameFile = async (pathToSourceFile, newName) => {
  const sourcePath = path.resolve(cwd(), pathToSourceFile);
  const targetPath = path.resolve(path.dirname(sourcePath), newName);

  if (!existsSync(sourcePath) || existsSync(targetPath)) {
    throw new Error("Operation failed");
  }
    fs.rename(sourcePath, targetPath, (error) => {
      console.log(error ? error : "File Renamed!");
    });
};
