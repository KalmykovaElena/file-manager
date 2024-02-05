import { createReadStream, createWriteStream, existsSync, rm } from "fs";
import path from "path";
import { cwd } from "process";
import { pipeline } from "stream/promises";

export const moveFile = async (pathToSourceFile, pathToTargetDirectory) => {
  const sourcePath = path.resolve(cwd(), pathToSourceFile);
  const fileName = path.basename(pathToSourceFile);
  const targetPath = path.resolve(pathToTargetDirectory, fileName);

  if (
    !existsSync(sourcePath) ||
    existsSync(targetPath) ||
    !existsSync(pathToTargetDirectory)
  ) {
    throw new Error("Operation failed");
  }
  await pipeline(createReadStream(sourcePath), createWriteStream(targetPath));
  rm(sourcePath, { recursive: true }, (error) => {
    console.log(error ? error : "The File has been moved");
  });
};
